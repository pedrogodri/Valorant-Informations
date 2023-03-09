export class ContentTiers {
  uuid?: string;
  displayName?: string;
  rank?: number;
  displayIcon?: string;

  constructor(obj: Partial<ContentTiers>) {
    Object.assign(this, obj);
  }
}
