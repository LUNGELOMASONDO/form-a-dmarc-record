import { Component, OnInit } from '@angular/core';
import { URIForensicTag } from 'src/models/DMARCRecordTags/URIForensicTag';

@Component({
  selector: 'app-tag-ruf',
  templateUrl: './tag-ruf.component.html',
  styleUrls: ['./tag-ruf.component.css']
})
export class TagRufComponent implements OnInit {
  uriForensicReporting!: URIForensicTag;
  constructor() { }

  ngOnInit(): void {
    this.uriForensicReporting = new URIForensicTag();
  }

}
