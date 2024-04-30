import { Asset } from './asset.model';

export enum Manufacturer {
  FIAT = 'fiat',
  KIA = 'kia',
  MINI = 'mini',
  MIT = 'mitsubishi',
  NISSAN = 'nissan',
}

export class Vehicle extends Asset {
  constructor(
    nickname,
    type,
    purchaseAmount,
    appraisalAmount,
    purchaseDate,
    public year: number,
    public make: Manufacturer,
    public model: string,
    public trim: string
  ) {
    super(nickname, type, purchaseAmount, appraisalAmount, purchaseDate);
  }
}
