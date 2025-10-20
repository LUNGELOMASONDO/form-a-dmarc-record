import { Component, OnInit } from '@angular/core';
import { URIAggregateTag } from 'src/models/DMARCRecordTags/URIAggregateTag';

@Component({
  selector: 'app-tag-rua',
  templateUrl: './tag-rua.component.html',
  styleUrls: ['./tag-rua.component.css']
})
export class TagRuaComponent implements OnInit{
  uriAggregateReporting!: URIAggregateTag;

  constructor() { }
  
  ngOnInit(): void {
    this.uriAggregateReporting = new URIAggregateTag();
  }
  
}
