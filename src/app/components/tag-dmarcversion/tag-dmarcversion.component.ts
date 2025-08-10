import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { DmarcversiontagService } from 'src/app/services/dmarc1tags/dmarcversion-tag/dmarcversiontag.service';
import { DMARCVersionTag } from 'src/models/DMARCRecordTags/DMARCVersionTag';
import { DMARC1Tag } from 'src/models/DMARCTagType';

@Component({
  selector: 'app-tag-dmarcversion',
  templateUrl: './tag-dmarcversion.component.html',
  styleUrls: ['./tag-dmarcversion.component.css']
})
export class TagDmarcversionComponent implements OnInit {
  faInfo = faInfoCircle;
  dmarcVersion!: DMARCVersionTag;

  constructor(private dmarcVersiontagService: DmarcversiontagService) { }

  ngOnInit(): void {
    this.dmarcVersiontagService.setTag(new DMARCVersionTag());
    this.dmarcVersion = this.dmarcVersiontagService.getTag();
  }

}
