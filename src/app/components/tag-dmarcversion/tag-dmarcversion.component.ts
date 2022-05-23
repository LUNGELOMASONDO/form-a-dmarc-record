import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tag-dmarcversion',
  templateUrl: './tag-dmarcversion.component.html',
  styleUrls: ['./tag-dmarcversion.component.css']
})
export class TagDmarcversionComponent implements OnInit {
  faInfo = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
