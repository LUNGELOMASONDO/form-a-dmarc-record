import { Component, inject, OnInit } from '@angular/core';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';
import { URIForensicTag } from 'src/models/DMARCRecordTags/URIForensicTag';

@Component({
    selector: 'app-tag-ruf',
    templateUrl: './tag-ruf.component.html',
    styleUrls: ['./tag-ruf.component.css'],
    standalone: false
})
export class TagRufComponent implements OnInit {
  uriForensicReporting!: URIForensicTag;
  private buildrecordService = inject(BuildRecordService);
  uriValue: string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.uriForensicReporting = new URIForensicTag();
    if (this.buildrecordService.DMARCRecord().ruf?.value) {
      this.uriForensicReporting.value = this.buildrecordService.DMARCRecord().ruf?.value;
    }
  }

  onURIForensicReportingChange(): void {
    this.buildrecordService.setForensicReportURITag(this.uriValue);
  }
}
