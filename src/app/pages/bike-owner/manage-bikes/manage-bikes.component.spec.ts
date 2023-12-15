import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBikesComponent } from './manage-bikes.component';

describe('ManageBikesComponent', () => {
  let component: ManageBikesComponent;
  let fixture: ComponentFixture<ManageBikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBikesComponent]
    });
    fixture = TestBed.createComponent(ManageBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
