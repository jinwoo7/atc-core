export enum AssetTypes {
  RealEstate,
  Vehicle,
}

export class Asset {
  constructor(
    // General
    public nickname: string,
    public type: AssetTypes,
    // Amounts
    public purchaseAmount: number,
    public appraisalAmount: number,
    // Dates
    public purchaseDate: Date
  ) {}
}
