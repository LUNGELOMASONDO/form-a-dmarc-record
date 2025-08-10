import { TestBed } from '@angular/core/testing';

import { DmarcrecordService } from './dmarcrecord.service';

describe('DmarcrecordService', () => {
  let service: DmarcrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmarcrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
