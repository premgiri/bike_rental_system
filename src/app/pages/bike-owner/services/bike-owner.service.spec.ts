import { TestBed } from '@angular/core/testing';

import { BikeOwnerService } from './bike-owner.service';

describe('BikeOwnerService', () => {
  let service: BikeOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
