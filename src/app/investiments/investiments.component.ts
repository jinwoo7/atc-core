import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { data } from '../data/assetData';

@Component({
  selector: 'app-investiments',
  templateUrl: './investiments.component.html',
  styleUrl: './investiments.component.css',
})
export class InvestimentsComponent {
  vehicles: any[];
  realEstates: any[];

  ngOnInit(): void {
    this.vehicles = data.vehicleData;
    this.realEstates = data.realEstateData;
  }
}
