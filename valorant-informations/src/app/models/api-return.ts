export class ApiReturn {
  status?: number;
  data?: Data[];

  constructor(obj: Partial<ApiReturn>) {
    Object.assign(this, obj);
  }
}

export class Data {
  tiers?: Tiers[];

  constructor(obj: Partial<ApiReturn>) {
    Object.assign(this, obj);
  }
}

export class Tiers {
  tier?: number;
  tierName?: string;

  constructor(obj: Partial<ApiReturn>) {
    Object.assign(this, obj);
  }
}
