import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordConfigPanelComponent } from './record-config-panel.component';

describe('RecordConfigPanelComponent', () => {
  let component: RecordConfigPanelComponent;
  let fixture: ComponentFixture<RecordConfigPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordConfigPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
