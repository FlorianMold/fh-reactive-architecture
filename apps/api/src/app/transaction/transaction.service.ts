import { Injectable } from "@nestjs/common";
import { GqlSdk, InjectSdk } from "../@graphql";
import { Payment, Transaction } from "@fh/api-interfaces";
import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  split,
} from "@apollo/client/core";
import * as WebSocket from "ws";
import { ConfigService } from "@nestjs/config";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "node-fetch";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import gql from "graphql-tag";

const query = gql`
  subscription onPaymentsSubscription {
    banking_payments(order_by: { id: desc }, limit: 1) {
      amount
      date
      from_iban
      from_name
      payment_reference
      to_iban
      to_name
      id
    }
  }
`;

@Injectable()
export class TransactionService {
  constructor(
    @InjectSdk() private readonly sdk: GqlSdk,
    configService: ConfigService
  ) {
    const endpoint = configService.get<string>(
      "HASURA_GRAPHQL_API_ENDPOINT_WS"
    );
    const secret = configService.get<string>("HASURA_GRAPHQL_ADMIN_SECRET");

    class MyWebSocket extends WebSocket {
      constructor(address, protocols) {
        super(address, protocols, {
          headers: {
            "x-hasura-admin-secret": secret,
          },
        });
      }
    }

    const httpLink = createHttpLink({
      uri: configService.get<string>("HASURA_GRAPHQL_API_ENDPOINT_HTTP"),
      fetch: fetch,
      headers: {
        "x-hasura-admin-secret": secret,
      },
    });

    const wsLink = new GraphQLWsLink(
      createClient({
        url: endpoint,
        webSocketImpl: MyWebSocket,
      })
    );

    const link = split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    );

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const client = new ApolloClient({
      link: from([errorLink, link]),
      cache: new InMemoryCache(),
      name: "GrahpQL",
      version: "0.0.0",
      assumeImmutableResults: true,
      queryDeduplication: true,
      headers: {
        "x-hasura-admin-secret": secret,
      },
    });

    const that = this;

    // Ignore the first subscription, so that existing entries do not get added.
    let ignore = 0;

    client
      .subscribe({
        query: query,
      })
      .subscribe({
        next(value: any) {
          const v = value.data.banking_payments;
          if (ignore >= 1) {
            for (const transaction of v) {
              const t: Transaction = {
                from: {
                  iban: transaction.from_iban,
                  name: transaction.from_name,
                },
                to: {
                  iban: transaction.to_iban,
                  name: transaction.to_name,
                },
                amount: transaction.amount,
                paymentReference: transaction.payment_reference,
                executionDate: new Date().toISOString(),
              };
              console.log("creating transaction", t);
              that.createTransaction(t);
            }
          }
          ignore++;
        },
        error(err) {
          console.error("err", err);
        },
      });
  }

  async createPayment(payment: Payment) {
    return this.sdk.createPayment({
      fromIban: payment.from.iban,
      fromName: payment.from.name,
      toIban: payment.to.iban,
      toName: payment.to.name,
      paymentReference: payment.paymentReference,
      amount: payment.amount,
      date: payment.date,
    });
  }

  async createTransaction(transaction: Transaction) {
    return this.sdk.createTransaction({
      fromIban: transaction.from.iban,
      fromName: transaction.from.name,
      toIban: transaction.to.iban,
      toName: transaction.to.name,
      paymentReference: transaction.paymentReference,
      amount: transaction.amount,
      executionDate: transaction.executionDate,
    });
  }

  async createTransactionAndPayment(transaction: Transaction) {
    const payment: Payment = {
      ...transaction,
      date: transaction.executionDate,
    };
    return Promise.all([
      // this.createTransaction(transaction),
      this.createPayment(payment),
    ]);
  }
}
