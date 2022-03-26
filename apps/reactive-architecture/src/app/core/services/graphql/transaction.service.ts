import { CreatePaymentGQL, OnPaymentsSubscriptionGQL, OnTransactionSubscriptionGQL } from '../../../@graphql';
import { Injectable } from '@angular/core';
import { Payment } from '@fh/api-interfaces';
import { tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionGraphQLService {
  constructor(private _onTransactionSubscription: OnTransactionSubscriptionGQL) {}

  public subscribeToTransactions(iban: string) {
    return this._onTransactionSubscription.subscribe({ iban: iban }).pipe(
      tap((result) => console.log(result)),
      map((result) => result.data),
      map((result) => result?.banking_transactions ?? [])
    );
  }
}
