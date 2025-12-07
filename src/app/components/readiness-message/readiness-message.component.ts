import { Component, inject} from '@angular/core';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { BuildRecordService } from 'src/app/services/build-record-service/build-record.service';

@Component({
    selector: 'app-readiness-message',
    templateUrl: './readiness-message.component.html',
    styleUrls: ['./readiness-message.component.css'],
    standalone: false
})
export class ReadinessMessageComponent {
  faCheck = faCheckCircle;
  buildrecordService = inject(BuildRecordService);

  constructor() { }

  OnClick(): void {
    if (this.buildrecordService.isValidRecord())
      navigator.clipboard.writeText(this.buildrecordService.txtdmarcrecord());
  }

}