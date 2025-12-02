import { Component, inject, OnInit } from '@angular/core';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';
import { PercentageTag } from 'src/models/DMARCRecordTags/PercentageTag';

@Component({
  selector: 'app-tag-percentage',
  templateUrl: './tag-percentage.component.html',
  styleUrl: './tag-percentage.component.css',
  standalone: false
})
export class TagPercentageComponent implements OnInit {

  percentage!: PercentageTag;
  buildrecordService = inject(BuildRecordService);
  percentageValue?: number;

  constructor() { }

  ngOnInit(): void{
    this.percentage = new PercentageTag();
    this.percentageValue = this.buildrecordService.DMARCRecord().pct?.value;
  }

  onUpdatePercentage(): void {
    this.buildrecordService.setPercentageTag(this.percentageValue || 0);
  }
}
