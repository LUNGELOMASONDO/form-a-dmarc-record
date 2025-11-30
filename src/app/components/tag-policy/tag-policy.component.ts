import { Component, OnInit, inject } from '@angular/core';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';
import { PolicyTag } from 'src/models/DMARCRecordTags/PolicyTag';

@Component({
    selector: 'app-tag-policy',
    templateUrl: './tag-policy.component.html',
    styleUrls: ['./tag-policy.component.css'],
    standalone: false
})
export class TagPolicyComponent implements OnInit{
  policy!: PolicyTag; 
  private buildrecordService = inject(BuildRecordService);
  policyValue?: DMARCPolicy;
  policies = ["none", "quarantine", "reject"];

  constructor() { }
  
  ngOnInit(): void {
    this.policy = this.buildrecordService.DMARCRecord().p;
    this.policyValue = this.policy.value;
  }

  
}
