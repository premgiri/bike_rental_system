import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeOwnerDashboardComponent } from './bike-owner-dashboard.component';

describe('BikeOwnerDashboardComponent', () => {
  let component: BikeOwnerDashboardComponent;
  let fixture: ComponentFixture<BikeOwnerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeOwnerDashboardComponent]
    });
    fixture = TestBed.createComponent(BikeOwnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
