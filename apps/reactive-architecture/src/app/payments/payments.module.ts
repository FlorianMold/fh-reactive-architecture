import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, CommonModule],
  declarations: [PaymentsComponent],
  exports: [PaymentsComponent],
})
export class PaymentsModule {}
