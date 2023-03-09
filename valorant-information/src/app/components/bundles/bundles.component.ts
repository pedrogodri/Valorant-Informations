import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Bundles } from './../../models/api-model/bundles-model/bundles-model';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss']
})
export class BundlesComponent implements OnInit {

  public bundlesData$ = new Subject<Bundles[] | undefined>();

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getBundles().subscribe(
      (resp) => {
        this.bundlesData$.next(resp.data);
      }
    )
  }

}
