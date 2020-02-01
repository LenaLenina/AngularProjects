import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAppComponent } from './rental-app.component';

describe('RentalAppComponent', () => {
  let component: RentalAppComponent;
  let fixture: ComponentFixture<RentalAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
