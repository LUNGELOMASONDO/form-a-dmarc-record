import { Injectable } from '@angular/core';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';
import { DMARCRecord } from 'src/models/DMARCRecord';
import { DMARCVERSIONERROR, POLICYERROR } from 'src/models/DMARCRecordErrors';
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

  getDMARCVersionTag(value: string): DMARCVersionTag {
    
    this.dmarcRecord.v = new DMARCVersionTag();
    return this.dmarcRecord.v;
  }

  getPolicyTag(value: DMARCPolicy): PolicyTag {
    this.dmarcRecord.p = new PolicyTag();
    this.dmarcRecord.p.value = value;
    return this.dmarcRecord.p;
  }

  getAggregateReportURITag(value: string): URIAggregateTag | undefined {
    this.dmarcRecord.rua = new URIAggregateTag();
    this.dmarcRecord.rua.value = "mailto:" +value;
    return this.dmarcRecord.rua;
  }

  getForensicReportURITag(value: string): URIForensicTag | undefined {
    this.dmarcRecord.ruf = new URIForensicTag();
    this.dmarcRecord.ruf.value = "mailto:" + value;
    return this.dmarcRecord.ruf;
  }

  getPercentageTag(value: number): PercentageTag | undefined {
    
    if(value > 0 || value <= 100) {
      this.dmarcRecord.pct = new PercentageTag();
      this.dmarcRecord.pct.value = value;
      return this.dmarcRecord.pct;
    }

    return undefined;
  }

  getSubDomainPolicyTag(value: DMARCPolicy): SubDomainPolicyTag | undefined {
    this.dmarcRecord.sp = new SubDomainPolicyTag();
    this.dmarcRecord.sp.value = value;
    return this.dmarcRecord.sp;
  }

}