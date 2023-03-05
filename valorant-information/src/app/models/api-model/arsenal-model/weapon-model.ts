export class Weapon {
  uuid?: string;
  displayName?: string;
  category?: string;
  defaultSkinUiid?: string;
  displayIcon?: string;
  killStreamIcon?: string;
  assetPath?: WeaponStats;
  skins?: Skins;
  shopData?: ShopData;

  constructor(obj: Partial<Weapon>) {
    Object.assign(this, obj);
  }
}

class WeaponStats {
  fireRate?: number;
  magazineSize?: number;
  runSpeedMultiplier?: number;
  equipTimeSeconds?: number;
  reloadTimeSeconds?: number;
  firstBulletAccuracy?: number;
  shotgunPelletCount?: number;
  wallPenetration?: string;
  feature?: string;
  fireMode?: string;
  altFireType?: string;

  constructor(obj: Partial<WeaponStats>) {
    Object.assign(this, obj);
  }
}

class Skins {
  uuid?: string;
  displayName?: string;
  themeUuid?: string;
  contentTierUuid?: string;
  displayIcon?: string;
  wallpaper?: string;
  assetPath?: string;

  constructor(obj: Partial<Skins>) {
    Object.assign(this, obj)
  }
}

class ShopData {
  cost?: number;
  category?: string;
  categoryText?: string;

  constructor(obj: Partial<ShopData>) {
    Object.assign(this, obj)
  }
}
