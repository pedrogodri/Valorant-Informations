import { Weapon } from '../../api-model/arsenal-model/weapon-model';
export class SingleWeaponReturn {
  status?: number;
  data: Weapon = new Weapon({});

  constructor(obj: Partial<SingleWeaponReturn>) {
    Object.assign(this, obj);
  }
}
