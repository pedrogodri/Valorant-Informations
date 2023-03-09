import { Bundles } from './../../api-model/bundles-model/bundles-model';

export class BundlesReturn {
  status?: number;
  data: Bundles[] = [];

  constructor(obj: Partial<BundlesReturn>) {
    Object.assign(this, obj);
  }
}
