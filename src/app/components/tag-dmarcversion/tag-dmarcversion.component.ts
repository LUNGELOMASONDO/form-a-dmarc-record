import { Component, inject, OnInit} from '@angular/core';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';
import { DMARCVersionTag } from 'src/models/DMARCRecordTags/DMARCVersionTag';
import { DMARCVersion } from "src/models/DMARCVersionType";

@Component({
    selector: 'app-tag-dmarcversion',
    templateUrl: './tag-dmarcversion.component.html',
    styleUrls: ['./tag-dmarcversion.component.css'],
    standalone: false
})
export class TagDmarcversionComponent implements OnInit {
  dmarcVersion!: DMARCVersionTag;
  private buildrecordService = inject(BuildRecordService);
  versions: DMARCVersion[] = ["DMARC1"];

  constructor() { }

  ngOnInit(): void {
    this.dmarcVersion = this.buildrecordService.DMARCRecord().v;
  }

  onDMARCVersionChange(): void {
    if (this.dmarcVersion.value) {
      this.buildrecordService.setDMARCVersionTag(this.dmarcVersion.value);
    }
  }
}
