import { TestBed } from '@angular/core/testing';

import { UiPolicyTagService } from './ui-policy-tag.service';

describe('UiPolicyTagService', () => {
  let service: UiPolicyTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiPolicyTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
