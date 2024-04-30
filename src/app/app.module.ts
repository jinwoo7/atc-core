import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { InvestimentsComponent } from './investiments/investiments.component';
import { AssetsComponent } from './assets/assets.component';
import { FinancesComponent } from './finances/finances.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.modules';
import { RealEstateService } from './services/realEstate.service';
import { VehicleService } from './services/vehicle.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { RadarChartComponent } from './charts/radar/radar.component';
import { BarChartComponent } from './charts/bar/bar.component';
import { LineChartComponent } from './charts/line/line.component';
import { PieChartComponent } from './charts/pie/pie.component';
import { MatDivider } from '@angular/material/divider';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './mini-card/mini-card.component';

@NgModule({
  declarations: [
    // In-House Components
    AppComponent,
    HeaderComponent,
    InvestimentsComponent,
    AssetsComponent,
    FinancesComponent,
    DashboardComponent,
    CardComponent,
    RadarChartComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    TableComponent,
    MiniCardComponent,
  ],
  imports: [
    // In-House Imports
    BrowserModule,
    // Library Imports
    MdbCollapseModule,
    AppRoutingModule,
    BaseChartDirective,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDivider,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    // In-House Providers
    VehicleService,
    RealEstateService,
    // Library Providers
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
