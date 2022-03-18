import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fh-create-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
  paymentForm = this.fb.group({
    fromName: [null, Validators.required],
    fromIban: [null, Validators.required],
    toName: [null, Validators.required],
    toIban: [null, Validators.required],
    paymentAmount: [null, Validators.required],
    paymentReference: [null, Validators.required],
    paymentDate: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.paymentForm.value);
    alert('Thanks!');
  }
}
