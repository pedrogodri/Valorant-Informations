export class TierComp {
  tier?: number;
  tierName?: string;
  divisionName?: string;
  smallIcon?: string;
  largeIcon?: string;

  constructor(obj: Partial<TierComp>) {
    Object.assign(this, obj);
  }
}
