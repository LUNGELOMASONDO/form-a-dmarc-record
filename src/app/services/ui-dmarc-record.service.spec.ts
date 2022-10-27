import { TestBed } from '@angular/core/testing';

import { UiDmarcRecordService } from './ui-dmarc-record.service';

describe('UiDmarcRecordService', () => {
  let service: UiDmarcRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiDmarcRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
