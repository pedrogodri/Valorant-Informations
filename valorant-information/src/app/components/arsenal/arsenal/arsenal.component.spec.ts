import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsenalComponent } from './arsenal.component';

describe('ListArsenalComponent', () => {
  let component: ArsenalComponent;
  let fixture: ComponentFixture<ArsenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArsenalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArsenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
