import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmarcRecordPanelComponent } from './dmarc-record-panel.component';

describe('DmarcRecordPanelComponent', () => {
  let component: DmarcRecordPanelComponent;
  let fixture: ComponentFixture<DmarcRecordPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmarcRecordPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmarcRecordPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
