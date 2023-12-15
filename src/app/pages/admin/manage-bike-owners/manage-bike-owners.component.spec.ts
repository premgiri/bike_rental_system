import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBikeOwnersComponent } from './manage-bike-owners.component';

describe('ManageBikeOwnersComponent', () => {
  let component: ManageBikeOwnersComponent;
  let fixture: ComponentFixture<ManageBikeOwnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBikeOwnersComponent]
    });
    fixture = TestBed.createComponent(ManageBikeOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
