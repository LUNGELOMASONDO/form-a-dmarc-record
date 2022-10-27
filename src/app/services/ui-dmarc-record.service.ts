import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiDmarcRecordService {
  private renderRecord: string = "";
  private subject = new Subject<any>();

  constructor() { }

  onChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
