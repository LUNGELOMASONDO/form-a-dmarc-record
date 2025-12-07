import { Injectable, computed, signal, WritableSignal, Signal } from '@angular/core';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';
import { DMARCRecord } from 'src/models/DMARCRecord';
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

  private _dmarcRecord: WritableSignal<DMARCRecord>;
  DMARCRecord: Signal<Readonly<DMARCRecord>>;

  readonly invalidRecordReasons: Signal<Readonly<string[]>> = computed(() => {
    let reasons: string[] = [];
    return reasons;
  });

  readonly hints: Signal<Readonly<string[]>> = computed(() => {
    const hintsArray: string[] = [];
    return hintsArray;
  });

  readonly isValidRecord: Signal<Readonly<boolean>> = computed(() => {
    return this.invalidRecordReasons().length === 0;
  });

  readonly txtdmarcrecord: Signal<Readonly<string>> = computed(() => {
    let recordStr: string = "";

    recordStr += this._dmarcRecord().v.tag + "=" + this._dmarcRecord().v.value + ";";
    recordStr += " " + this._dmarcRecord().p.tag + "=" + this._dmarcRecord().p.value + ";";
    recordStr += " " + this._dmarcRecord().pct?.tag + "=" + this._dmarcRecord().pct?.value + ";";

    if(this._dmarcRecord().rua) { recordStr += " " + this._dmarcRecord().rua?.tag + "=" + this._dmarcRecord().rua?.value + ";"; }
    if(this._dmarcRecord().ruf) { recordStr += " " + this._dmarcRecord().ruf?.tag + "=" + this._dmarcRecord().ruf?.value + ";"; }

    return recordStr
  });

  constructor() { 
    this._dmarcRecord = signal(Object.assign(new DMARCRecord(), {
      v: (() => { const t = new DMARCVersionTag(); t.value = 'DMARC1'; return t; })(),
      p: (() => { const t = new PolicyTag(); t.value = 'none'; return t; })(),
      pct: (() => { const t = new PercentageTag(); t.value = 100; return t; })(),
    }));

    this.DMARCRecord = this._dmarcRecord.asReadonly();
  }

  setDMARCVersionTag(value: DMARCVersion) {
    this._dmarcRecord.update(r => ({...r, v: (() => { 
        const t = new DMARCVersionTag(); 
        t.value = value; 
        return t; 
      })()
    }));
  }

  setPolicyTag(value: DMARCPolicy) {
    this._dmarcRecord.update(r => ({...r, p: (() => { 
        const t = new PolicyTag(); 
        t.value = value; 
        return t; 
      })()
    }));
  }

  setAggregateReportURITag(value: string) {

    const uri = value.startsWith('mailto:') ? value : `mailto:${value}`;

    if (this._isValidReportingURIFormat(uri)) {
      this._dmarcRecord.update(r => ({...r, rua: (() => { 
          const t = new URIAggregateTag(); 
          t.value = uri; 
          return t; 
        })()
      }));
    }
    else {
      this._dmarcRecord.update(r => ({...r, rua: undefined }));
    }
  }

  setForensicReportURITag(value: string) {

    const uri = value.startsWith('mailto:') ? value : `mailto:${value}`;

    if (this._isValidReportingURIFormat(uri)) {
      this._dmarcRecord.update(r => ({...r, ruf: (() => { 
          const t = new URIForensicTag(); 
          t.value = uri; 
          return t; 
        })()
      }));
    }
    else {
      this._dmarcRecord.update(r => ({...r, ruf: undefined }));
    }
  }

  setPercentageTag(value: number) {
    
    if (value >= 0 && value <= 100) {
      this._dmarcRecord.update(r => ({...r, pct: (() => { 
          const t = new PercentageTag(); 
          t.value = value; 
          return t; 
        })()
      }));
    }
  }

  setSubDomainPolicyTag(value: DMARCPolicy) {
    this._dmarcRecord.update(r => ({...r, sp: (() => { 
        const t = new SubDomainPolicyTag(); 
        t.value = value; 
        return t; 
      })()
    }));
  }
  
  private _isValidReportingURIFormat(value: string): boolean {
    const regex = /^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value);
  }
}
