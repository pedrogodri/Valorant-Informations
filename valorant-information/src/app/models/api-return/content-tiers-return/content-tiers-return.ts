import { ContentTiers } from "../../api-model/content-tiers-model/content-tiers-model";

export class ContentTiersReturn {
  status?: number;
  data: ContentTiers[] = [];

  constructor(obj: Partial<ContentTiersReturn>) {
    Object.assign(this, obj);
  }
}
