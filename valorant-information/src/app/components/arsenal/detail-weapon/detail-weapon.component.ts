import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../service/api.service';
import { SingleWeaponReturn } from './../../../models/api-return/arsenal-return/single-weapon-return';
import { Weapon } from './../../../models/api-model/arsenal-model/weapon-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-weapon',
  templateUrl: './detail-weapon.component.html',
  styleUrls: ['./detail-weapon.component.scss']
})
export class DetailWeaponComponent implements OnInit {

  @Input() singleWeapon: SingleWeaponReturn = new SingleWeaponReturn({});

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    let paramUuid = this.route.snapshot.paramMap.get('Uuid');
    if(paramUuid) {
      this.service.getWeaponByUuid(paramUuid).subscribe(
        (resp) => {
          this.singleWeapon = resp;
        }
      )
    }
  }

}
