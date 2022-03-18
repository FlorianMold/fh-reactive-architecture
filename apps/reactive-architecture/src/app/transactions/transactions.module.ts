import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  declarations: [TransactionsComponent],
  exports: [TransactionsComponent],
})
export class TransactionsModule {}
