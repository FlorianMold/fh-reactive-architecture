import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TransactionsDataSource, TransactionsItem } from './payments-datasource';

@Component({
  selector: 'fh-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TransactionsItem>;
  dataSource: TransactionsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new TransactionsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}