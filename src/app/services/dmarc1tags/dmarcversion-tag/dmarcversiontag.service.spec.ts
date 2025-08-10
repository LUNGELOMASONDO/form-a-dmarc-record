import { TestBed } from '@angular/core/testing';

import { DmarcversiontagService } from './dmarcversiontag.service';

describe('DmarcversiontagService', () => {
  let service: DmarcversiontagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmarcversiontagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
