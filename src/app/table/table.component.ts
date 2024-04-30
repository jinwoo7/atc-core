import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableDataSource } from './table-datasource';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Vehicle>;
  dataSource = new TableDataSource(this.vehicleService);

  constructor(private vehicleService: VehicleService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];
  displayedColumns = [
    'nickname',
    'type',
    'purchaseAmount',
    'appraisalAmount',
    'purchaseDate',
    'year',
    'make',
    'model',
    'trim',
  ];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    console.log(this.dataSource);
    console.log(this.table);
  }
}

// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatTable } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { TableDataSource, TableItem } from './table-datasource';
// import { Vehicle } from '../models/vehicle.model';
// import { VehicleService } from '../services/vehicle.service';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrl: './table.component.css',
// })
// export class TableComponent implements AfterViewInit, OnInit {
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   @ViewChild(MatTable) table!: MatTable<Vehicle>;
//   dataSource: TableDataSource;

//   constructor(private vehicleService: VehicleService) {};

//   ngOnInit(): void {
//     this.dataSource = new TableDataSource(this.vehicleService);
//   }

//   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
//   displayedColumns = [
//     'nickname',
//     'assetType',
//     'purchaseAmount',
//     'appraisalAmount',
//     'purchaseDate',
//     'year',
//     'make',
//     'model',
//     'trim',
//   ];

//   ngAfterViewInit(): void {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;
//     this.table.dataSource = this.dataSource;
//   }
// }
