import { TestBed } from '@angular/core/testing';

import { UiDmarcVersionTagService } from './ui-dmarc-version-tag.service';

describe('UiDmarcVersionTagService', () => {
  let service: UiDmarcVersionTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiDmarcVersionTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
