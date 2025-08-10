import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { PolicytagService } from 'src/app/services/dmarc1tags/policy-tag/policytag.service';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';
import { PolicyTag } from 'src/models/DMARCRecordTags/PolicyTag';

@Component({
  selector: 'app-tag-policy',
  templateUrl: './tag-policy.component.html',
  styleUrls: ['./tag-policy.component.css']
})
export class TagPolicyComponent implements OnInit {
  faInfo = faInfoCircle;
  policy!: PolicyTag; 

  constructor(protected policyTagService: PolicytagService) { }

  ngOnInit(): void {
    this.policyTagService.setTag(new PolicyTag());
    this.policy = this.policyTagService.getTag();
    this.policy.value = 'none';
  }

  OnselectPolicyEnforcementMode(event:Event): void {
    this.policy.value = (event.target as HTMLSelectElement).value as DMARCPolicy;
    this.policyTagService.setTag(this.policy);
  }
}
