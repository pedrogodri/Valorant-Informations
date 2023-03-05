import { TestBed } from '@angular/core/testing';

import { ApiTiersCompService } from './api-tiers-comp.service';

describe('ApiTiersCompService', () => {
  let service: ApiTiersCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTiersCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
