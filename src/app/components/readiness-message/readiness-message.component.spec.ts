import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadinessMessageComponent } from './readiness-message.component';

describe('ReadinessMessageComponent', () => {
  let component: ReadinessMessageComponent;
  let fixture: ComponentFixture<ReadinessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadinessMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadinessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
