import { Weapon } from "../../api-model/arsenal-model/weapon-model";

export class WeaponReturn {
  status?: number;
  data: Weapon[] = [];

  constructor(obj: Partial<WeaponReturn>) {
    Object.assign(this, obj);
  }
}
