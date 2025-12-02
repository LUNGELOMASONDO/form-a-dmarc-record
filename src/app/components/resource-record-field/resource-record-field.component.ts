import { Component, inject } from '@angular/core';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';

@Component({
    selector: 'app-resource-record-field',
    templateUrl: './resource-record-field.component.html',
    styleUrls: ['./resource-record-field.component.css'],
    standalone: false
})
export class ResourceRecordFieldComponent {
  buildRecordService = inject(BuildRecordService);

  constructor() { }

}
