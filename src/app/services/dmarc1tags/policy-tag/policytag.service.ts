import { Injectable } from '@angular/core';
import { PolicyTag } from 'src/models/DMARCRecordTags/PolicyTag';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';

@Injectable({
  providedIn: 'root'
})
export class PolicytagService {
  protected policyTag!: PolicyTag;

  constructor() {
    this.policyTag = new PolicyTag();
  }

  getTag(): PolicyTag {
    return this.policyTag;
  }

  setTag(policy: PolicyTag): void {
    this.policyTag = policy;
  }

}
