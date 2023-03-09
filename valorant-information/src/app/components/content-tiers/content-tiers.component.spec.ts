import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTiersComponent } from './content-tiers.component';

describe('ContentTiersComponent', () => {
  let component: ContentTiersComponent;
  let fixture: ComponentFixture<ContentTiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
