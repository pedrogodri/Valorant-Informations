import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTiersCompComponent } from './details-tiers-comp.component';

describe('DetailsTiersCompComponent', () => {
  let component: DetailsTiersCompComponent;
  let fixture: ComponentFixture<DetailsTiersCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTiersCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTiersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
