import { Weapon } from './../../../models/api-model/arsenal-model/weapon-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-weapon',
  templateUrl: './list-weapon.component.html',
  styleUrls: ['./list-weapon.component.scss']
})
export class ListWeaponComponent implements OnInit{

  @Input() weapon: Weapon = new Weapon({});

  constructor() { }

  ngOnInit(): void {
  }

}
