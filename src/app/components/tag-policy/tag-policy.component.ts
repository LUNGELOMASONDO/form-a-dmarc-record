import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tag-policy',
  templateUrl: './tag-policy.component.html',
  styleUrls: ['./tag-policy.component.css']
})
export class TagPolicyComponent implements OnInit {
  faInfo = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
