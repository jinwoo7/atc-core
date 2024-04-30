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
      'Pitaya', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2015,
      Manufacturer.FIAT,
      '500',
      'Abarth'
    ),
    new Vehicle(
      'Gucci', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2012,
      Manufacturer.FIAT,
      '500c',
      'Pop'
    ),
    new Vehicle(
      'Jack', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2014,
      Manufacturer.FIAT,
      '500L',
      'Trekking'
    ),
    new Vehicle(
      'Bell', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2015,
      Manufacturer.FIAT,
      '500L',
      'Urbana Trekking'
    ),
    new Vehicle(
      'Blueberry', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2015,
      Manufacturer.KIA,
      'Forte',
      'EX'
    ),
    new Vehicle(
      'Cherry', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2013,
      Manufacturer.KIA,
      'Optima',
      'LX'
    ),
    new Vehicle(
      'Hickory', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2014,
      Manufacturer.KIA,
      'Soul',
      'SE'
    ),
    new Vehicle(
      'Coco', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2013,
      Manufacturer.MINI,
      'Cooper',
      'Base'
    ),
    new Vehicle(
      'Apple', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2014,
      Manufacturer.MINI,
      'Cooper',
      'Sports'
    ),
    new Vehicle(
      'Maple', // nickname
      AssetTypes.Vehicle, // asset type
      0, // purchase Amount
      0, // appraisal Amount
      new Date(2020, 7, 4),
      2015,
      Manufacturer.MIT,
      'Mirage',
      'DE'
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
      'SV'
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
