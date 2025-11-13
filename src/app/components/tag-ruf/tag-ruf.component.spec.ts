import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRufComponent } from './tag-ruf.component';

describe('TagRufComponent', () => {
  let component: TagRufComponent;
  let fixture: ComponentFixture<TagRufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagRufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
