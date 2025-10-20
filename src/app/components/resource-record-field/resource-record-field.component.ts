import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-record-field',
  templateUrl: './resource-record-field.component.html',
  styleUrls: ['./resource-record-field.component.css']
})
export class ResourceRecordFieldComponent {
  dmarcRecordTXT!: string;

  constructor() { }

}
