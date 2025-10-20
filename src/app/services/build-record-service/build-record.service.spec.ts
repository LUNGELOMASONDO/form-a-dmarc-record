import { TestBed } from '@angular/core/testing';

import { BuildRecordService } from './build-record.service';

describe('BuildRecordService', () => {
  let service: BuildRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
