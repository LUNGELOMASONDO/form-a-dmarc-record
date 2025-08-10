import { Injectable } from '@angular/core';
import { DMARCVersionTag } from 'src/models/DMARCRecordTags/DMARCVersionTag';
import { DMARC1Tag } from 'src/models/DMARCTagType';
import { DMARCVersion } from 'src/models/DMARCVersionType';

@Injectable({
  providedIn: 'root'
})
export class DmarcversiontagService {

  private versionTag: DMARCVersionTag;

  //value set to DMARC1 by default

  constructor() { 
    this.versionTag = new DMARCVersionTag();
  }

  getTag(): DMARCVersionTag {
    return this.versionTag;
  }

  setTag(version: DMARCVersionTag): void {
    this.versionTag = new DMARCVersionTag;
  }

}
