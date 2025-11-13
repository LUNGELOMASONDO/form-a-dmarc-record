import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPercentageComponent } from './tag-percentage.component';

describe('TagPercentageComponent', () => {
  let component: TagPercentageComponent;
  let fixture: ComponentFixture<TagPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagPercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
