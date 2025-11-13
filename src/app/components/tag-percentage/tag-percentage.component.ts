import { Component, OnInit } from '@angular/core';
import { PercentageTag } from 'src/models/DMARCRecordTags/PercentageTag';

@Component({
  selector: 'app-tag-percentage',
  templateUrl: './tag-percentage.component.html',
  styleUrl: './tag-percentage.component.css',
  standalone: false
})
export class TagPercentageComponent implements OnInit {
  percentage!: PercentageTag;

  constructor() {}

  ngOnInit(): void{
    this.percentage = new PercentageTag();
  }
}
