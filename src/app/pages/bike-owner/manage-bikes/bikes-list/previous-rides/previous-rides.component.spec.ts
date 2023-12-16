import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousRidesComponent } from './previous-rides.component';

describe('PreviousRidesComponent', () => {
  let component: PreviousRidesComponent;
  let fixture: ComponentFixture<PreviousRidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousRidesComponent]
    });
    fixture = TestBed.createComponent(PreviousRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
