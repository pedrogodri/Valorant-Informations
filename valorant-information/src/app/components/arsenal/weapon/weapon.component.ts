import { Weapon } from '../../../models/api-model/arsenal-model/weapon-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit{

  @Input() weapon: Weapon = new Weapon({});

  constructor() { }

  ngOnInit(): void {

  }
}
