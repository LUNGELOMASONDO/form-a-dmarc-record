import { Component, Input, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taglabel',
  templateUrl: './taglabel.component.html',
  styleUrls: ['./taglabel.component.css']
})

export class TaglabelComponent implements OnInit {
  faInfo = faInfoCircle;
  @Input() tagName!: string;
  @Input() tagPurpose!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
