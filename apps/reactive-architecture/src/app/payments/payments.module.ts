import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PaymentsComponent } from "./payments.component";

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  declarations: [PaymentsComponent],
  exports: [PaymentsComponent],
})
export class PaymentsModule {}
