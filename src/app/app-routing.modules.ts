import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancesComponent } from './finances/finances.component';
import { InvestimentsComponent } from './investiments/investiments.component';
import { AssetsPageComponent } from './assetspage/assetspage.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'assets', component: AssetsPageComponent },
  { path: 'investiments', component: InvestimentsComponent },
  { path: 'finances', component: FinancesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
