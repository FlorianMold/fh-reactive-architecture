import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PaymentGraphQLService } from '../core/services/graphql';
import { AuthenticationService } from '../core/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'fh-create-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  paymentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _paymentService: PaymentGraphQLService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const { person } = this._authenticationService.getCurrentUser();

    this.paymentForm = this.fb.group({
      fromName: [person.name, Validators.required],
      fromIban: [person.iban, Validators.required],
      toName: [null, Validators.required],
      toIban: [null, Validators.required],
      paymentAmount: [null, Validators.required],
      paymentReference: [null, Validators.required],
      paymentDate: [new Date(), Validators.required],
    });
  }

  onSubmit(): void {
    const { person } = this._authenticationService.getCurrentUser();

    const { fromIban, fromName, paymentAmount, paymentDate, paymentReference, toIban, toName } = this.paymentForm.value;
    this._paymentService
      .createPayment({
        from: {
          name: fromName,
          iban: fromIban,
        },
        to: {
          name: toName,
          iban: toIban,
        },
        paymentReference,
        amount: paymentAmount,
        date: paymentDate,
      })
      .subscribe((value) => {
        console.log(value);
        this.toastr.success('Payment created!');
      });
    this.form.resetForm({
      fromIban: person.iban,
      fromName: person.name,
      paymentDate: new Date(),
    });
  }
}
