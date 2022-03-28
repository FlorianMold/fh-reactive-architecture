import { Inject, Module } from "@nestjs/common";
import { getSdk } from "./_generated";
import {
  GraphQLClientInject,
  GraphQLRequestModule,
} from "@golevelup/nestjs-graphql-request";
import { ConfigService } from "@nestjs/config";
import { GraphQLClient } from "graphql-request";

const SDK = "SdkModule";

export type GqlSdk = ReturnType<typeof getSdk>;

export const InjectSdk = () => Inject(SDK);

@Module({
  imports: [
    GraphQLRequestModule.forRootAsync(GraphQLRequestModule, {
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const endpoint = configService.get<string>(
          "HASURA_GRAPHQL_API_ENDPOINT_HTTP"
        );
        const secret = configService.get<string>("HASURA_GRAPHQL_ADMIN_SECRET");

        return {
          endpoint,
          options: {
            headers: {
              "content-type": "application/json",
              "x-hasura-admin-secret": secret,
            },
          },
        };
      },
    }),
  ],
  providers: [
    {
      provide: SDK,
      inject: [GraphQLClientInject],
      useFactory: (client: GraphQLClient) => {
        return getSdk(client);
      },
    },
  ],
  exports: [SDK],
})
export class SdkModule {}
