import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPolicyComponent } from './tag-policy.component';

describe('TagPolicyComponent', () => {
  let component: TagPolicyComponent;
  let fixture: ComponentFixture<TagPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
