export class Bundles {
  uuid?: string;
  displayName?: string;
  displayIcon?: string;

  constructor(obj: Partial<Bundles>) {
    Object.assign(this, obj);
  }
}
