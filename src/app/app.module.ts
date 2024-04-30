import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestimentsComponent,
    AssetsComponent,
    FinancesComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, MdbCollapseModule, AppRoutingModule],
  providers: [VehicleService, RealEstateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
