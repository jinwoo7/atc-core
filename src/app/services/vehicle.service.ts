import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Manufacturer, Vehicle } from '../models/vehicle.model';
import { AssetTypes } from '../models/asset.model';

@Injectable()
export class VehicleService {
  vehiclesChanged = new Subject<Vehicle[]>();
  constructor() {}

  // Fake Data source (Real Estate names => USS Aircraft Carriers)
  private vehicles: Vehicle[] = [
    new Vehicle(
      'Kiwi', // nickname
      AssetTypes.Vehicle, // asset type
      10500, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2015,
      Manufacturer.FIAT,
      '500',
      'Pop'
    ),
    new Vehicle(
      'Blackberry', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2013,
      Manufacturer.NISSAN,
      'Altima',
      'SE'
    ),
  ];

  getVehicles() {
    return this.vehicles.slice();
  }

  getVehicle(index: number) {
    return this.vehicles[index];
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
    this.vehiclesChanged.next(this.vehicles.slice());
  }

  updateVehicle(index: number, newVehicle: Vehicle) {
    this.vehicles[index] = newVehicle;
    this.vehiclesChanged.next(this.vehicles.slice());
  }

  deleteVehicle(index: number) {
    this.vehicles.splice(index, 1);
    this.vehiclesChanged.next(this.vehicles.slice());
  }
}
