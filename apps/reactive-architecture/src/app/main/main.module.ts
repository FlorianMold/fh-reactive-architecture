import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { PaymentModule } from '../payment/payment.module';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PaymentsModule } from '../payments/payments.module';
import { TransactionsModule } from '../transactions/transactions.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    PaymentModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    CommonModule,
    TransactionsModule,
    PaymentsModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
