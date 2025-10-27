import { Component, OnInit } from '@angular/core';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-readiness-message',
    templateUrl: './readiness-message.component.html',
    styleUrls: ['./readiness-message.component.css'],
    standalone: false
})
export class ReadinessMessageComponent implements OnInit {
  faCheck = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
