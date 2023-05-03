import { TestBed } from '@angular/core/testing';

import { HardCodedAuthServiceService } from './hard-coded-auth-service.service';

describe('HardCodedAuthServiceService', () => {
  let service: HardCodedAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
