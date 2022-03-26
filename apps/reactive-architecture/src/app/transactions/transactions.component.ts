import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services';
import { Observable } from 'rxjs';
import { TransactionGraphQLService } from "../core/services/graphql";

@Component({
  selector: 'fh-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent implements OnInit {
  constructor(
    private _transactionService: TransactionGraphQLService,
    private _authenticationService: AuthenticationService
  ) {}

  _transactionSubscription!: Observable<any>;

  ngOnInit() {
    const currentUser = this._authenticationService.getCurrentUser();
    this._transactionSubscription = this._transactionService.subscribeToTransactions(currentUser.person.iban);
  }
}
