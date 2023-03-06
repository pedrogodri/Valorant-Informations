import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWeaponComponent } from './weapon.component';

describe('ListWeaponComponent', () => {
  let component: ListWeaponComponent;
  let fixture: ComponentFixture<ListWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWeaponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
