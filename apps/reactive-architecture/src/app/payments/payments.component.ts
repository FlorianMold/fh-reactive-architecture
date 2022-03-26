import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaymentGraphQLService } from '../core/services/graphql';
import { AuthenticationService } from '../core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'fh-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsComponent implements OnInit {
  constructor(private _paymentService: PaymentGraphQLService, private _authenticationService: AuthenticationService) {}

  _paymentsSubscription!: Observable<any>;

  ngOnInit() {
    const currentUser = this._authenticationService.getCurrentUser();
    this._paymentsSubscription = this._paymentService.subscribeToPayments(currentUser.person.iban);
  }
}
