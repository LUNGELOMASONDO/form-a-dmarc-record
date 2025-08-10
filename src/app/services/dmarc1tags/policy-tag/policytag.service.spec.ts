import { TestBed } from '@angular/core/testing';

import { PolicytagService } from './policytag.service';

describe('PolicytagService', () => {
  let service: PolicytagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicytagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
