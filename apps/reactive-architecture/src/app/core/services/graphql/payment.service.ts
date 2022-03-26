import { CreatePaymentGQL, OnPaymentsSubscriptionGQL } from '../../../@graphql';
import { Injectable } from '@angular/core';
import { Payment } from '@fh/api-interfaces';
import { tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentGraphQLService {
  constructor(
    private _createPaymentMutation: CreatePaymentGQL,
    private _onPaymentSubscription: OnPaymentsSubscriptionGQL
  ) {}

  public createPayment(payment: Payment) {
    return this._createPaymentMutation
      .mutate({
        amount: payment.amount,
        date: payment.date,
        fromIban: payment.from.iban,
        fromName: payment.from.name,
        toIban: payment.to.iban,
        toName: payment.to.name,
        paymentReference: payment.paymentReference,
      })
      .pipe(tap((result) => console.log(result)));
  }

  public subscribeToPayments(iban: string) {
    return this._onPaymentSubscription.subscribe({ iban: iban }).pipe(
      tap((result) => console.log(result)),
      map((result) => result.data),
      map((result) => result?.banking_payments ?? [])
    );
  }
}
