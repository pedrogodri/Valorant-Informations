import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArsenalComponent } from './list-arsenal.component';

describe('ListArsenalComponent', () => {
  let component: ListArsenalComponent;
  let fixture: ComponentFixture<ListArsenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArsenalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArsenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
