import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ContentTiers } from './../../models/api-model/content-tiers-model/content-tiers-model';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tiers',
  templateUrl: './content-tiers.component.html',
  styleUrls: ['./content-tiers.component.scss']
})
export class ContentTiersComponent implements OnInit {

  public contentTiers$ = new Subject<ContentTiers[] | undefined>();

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getContentTiers().subscribe(
      (resp) => {
        this.contentTiers$.next(resp.data);
      }
    )
  }

}
