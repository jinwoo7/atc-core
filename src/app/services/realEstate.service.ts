import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RealEstate, State } from '../models/realEstate.model';
import { AssetTypes } from '../models/asset.model';

@Injectable()
export class RealEstateService {
  realEstatesChanged = new Subject<RealEstate[]>();
  constructor() {}

  // Fake Data source (Real Estate names => USS Aircraft Carriers)
  private realEstates: RealEstate[] = [
    new RealEstate(
      'Langley', // nickname
      AssetTypes.RealEstate, // asset type
      385000, // purchase Amount
      385000, // appraisal Amount
      new Date(2020, 7, 4),
      '6171',
      'Rancho Mission road',
      'unit 212',
      'San Diego',
      State.CA,
      92108
    ),
    new RealEstate(
      'Lexington', // nickname
      AssetTypes.RealEstate, // asset type
      127500, // purchase Amount
      124000, // appraisal Amount
      new Date(2020, 10, 4),
      '508',
      'Meredith Street',
      'u',
      'High Point',
      State.NC,
      27260
    ),
    new RealEstate(
      'Saratoga', // nickname
      AssetTypes.RealEstate, // asset type
      440000, // purchase Amount
      442500, // appraisal Amount
      new Date(2021, 11, 4),
      '6171',
      'Rancho Mission road',
      'unit 108',
      'San Diego',
      State.CA,
      92108
    ),
  ];

  getRealEstates() {
    return this.realEstates.slice();
  }

  getRealEstate(index: number) {
    return this.realEstates[index];
  }

  addRealEstate(realEstate: RealEstate) {
    this.realEstates.push(realEstate);
    this.realEstatesChanged.next(this.realEstates.slice());
  }

  updateRealEstate(index: number, newRealEstate: RealEstate) {
    this.realEstates[index] = newRealEstate;
    this.realEstatesChanged.next(this.realEstates.slice());
  }

  deleteRealEstate(index: number) {
    this.realEstates.splice(index, 1);
    this.realEstatesChanged.next(this.realEstates.slice());
  }
}
