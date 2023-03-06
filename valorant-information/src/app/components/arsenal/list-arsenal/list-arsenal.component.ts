import { ApiService } from './../../../service/api.service';
import { Weapon } from './../../../models/api-model/arsenal-model/weapon-model';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-arsenal',
  templateUrl: './list-arsenal.component.html',
  styleUrls: ['./list-arsenal.component.scss']
})
export class ListArsenalComponent implements OnInit {

  public weaponData$ = new Subject<Weapon[] | undefined>();

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getWeapons().subscribe(
      (resp) => {
        this.weaponData$.next(resp.data);
        console.log(resp.data);
      }
    )
  }

}
