import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRuaComponent } from './tag-rua.component';

describe('TagRuaComponent', () => {
  let component: TagRuaComponent;
  let fixture: ComponentFixture<TagRuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagRuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
