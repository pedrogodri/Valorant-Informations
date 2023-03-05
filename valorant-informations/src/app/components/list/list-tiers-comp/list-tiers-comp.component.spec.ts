import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiersCompComponent } from './list-tiers-comp.component';

describe('ListTiersCompComponent', () => {
  let component: ListTiersCompComponent;
  let fixture: ComponentFixture<ListTiersCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTiersCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTiersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
