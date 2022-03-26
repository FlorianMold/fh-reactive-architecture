import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatExpansionModule, CommonModule, MatInputModule],
  declarations: [TransactionsComponent],
  exports: [TransactionsComponent],
})
export class TransactionsModule {}
