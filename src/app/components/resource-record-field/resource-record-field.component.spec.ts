import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceRecordFieldComponent } from './resource-record-field.component';

describe('ResourceRecordFieldComponent', () => {
  let component: ResourceRecordFieldComponent;
  let fixture: ComponentFixture<ResourceRecordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceRecordFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceRecordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
