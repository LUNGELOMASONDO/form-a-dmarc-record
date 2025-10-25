import { Injectable } from '@angular/core';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';
import { DMARCRecord } from 'src/models/DMARCRecord';
import { AgregateReportIntervalTag } from 'src/models/DMARCRecordTags/AggregateReportIntervalTag';
import { DMARCVersionTag } from 'src/models/DMARCRecordTags/DMARCVersionTag';
import { PercentageTag } from 'src/models/DMARCRecordTags/PercentageTag';
import { PolicyTag } from 'src/models/DMARCRecordTags/PolicyTag';
import { SubDomainPolicyTag } from 'src/models/DMARCRecordTags/SubDomainPolicyTag';
import { URIAggregateTag } from 'src/models/DMARCRecordTags/URIAggregateTag';
import { URIForensicTag } from 'src/models/DMARCRecordTags/URIForensicTag';
import { DMARCVersion } from 'src/models/DMARCVersionType';

@Injectable({
  providedIn: 'root'
})
export class BuildRecordService {
  protected dmarcRecord: DMARCRecord;

  constructor() { 
    this.dmarcRecord = new DMARCRecord();
  }

  setDMARCVersionTag(value: DMARCVersion) {
    this.dmarcRecord.v = new DMARCVersionTag();
  }

  setPolicyTag(value: DMARCPolicy) {
    this.dmarcRecord.p = new PolicyTag();
    this.dmarcRecord.p.value = value;
  }

  setAggregateReportURITag(value: string) {
    this.dmarcRecord.rua = new URIAggregateTag();
    this.dmarcRecord.rua.value = "mailto:" +value;
  }

  setForensicReportURITag(value: string) {
    this.dmarcRecord.ruf = new URIForensicTag();
    this.dmarcRecord.ruf.value = "mailto:" + value;
  }

  setPercentageTag(value: number) {
    
    if(value > 0 || value <= 100) {
      this.dmarcRecord.pct = new PercentageTag();
      this.dmarcRecord.pct.value = value;
    }
  }

  setSubDomainPolicyTag(value: DMARCPolicy) {
    this.dmarcRecord.sp = new SubDomainPolicyTag();
    this.dmarcRecord.sp.value = value;
  }

}