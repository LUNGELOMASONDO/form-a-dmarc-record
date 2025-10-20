import { Component, OnInit } from '@angular/core';
import { DMARCVersionTag } from 'src/models/DMARCRecordTags/DMARCVersionTag';

@Component({
  selector: 'app-tag-dmarcversion',
  templateUrl: './tag-dmarcversion.component.html',
  styleUrls: ['./tag-dmarcversion.component.css'],
})
export class TagDmarcversionComponent implements OnInit {
  dmarcVersion!: DMARCVersionTag;

  constructor() { }

  ngOnInit(): void {
    this.dmarcVersion = new DMARCVersionTag();
  }
}
