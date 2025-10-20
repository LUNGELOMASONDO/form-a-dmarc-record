import { Component, OnInit } from '@angular/core';
import { DMARCPolicy } from 'src/models/DMARCPolicyType';
import { PolicyTag } from 'src/models/DMARCRecordTags/PolicyTag';

@Component({
  selector: 'app-tag-policy',
  templateUrl: './tag-policy.component.html',
  styleUrls: ['./tag-policy.component.css']
})
export class TagPolicyComponent implements OnInit{
  policy!: PolicyTag; 

  constructor() { }
  
  ngOnInit(): void {
    this.policy = new PolicyTag();
  }
  
}
