import { Component, inject, OnInit } from '@angular/core';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';
import { URIAggregateTag } from 'src/models/DMARCRecordTags/URIAggregateTag';

@Component({
    selector: 'app-tag-rua',
    templateUrl: './tag-rua.component.html',
    styleUrls: ['./tag-rua.component.css'],
    standalone: false
})
export class TagRuaComponent implements OnInit{
  uriAggregateReporting!: URIAggregateTag;
  private buildrecordService = inject(BuildRecordService);
  uriValue: string = "";

  constructor() { }
  
  ngOnInit(): void {
    this.uriAggregateReporting = new URIAggregateTag();
    if (this.buildrecordService.DMARCRecord().rua?.value) {
      this.uriAggregateReporting.value = this.buildrecordService.DMARCRecord().rua?.value;
    }
  }
  
  onURIAggregateReportingChange(): void {
    this.buildrecordService.setAggregateReportURITag(this.uriValue);
  }
}
