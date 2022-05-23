import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDmarcversionComponent } from './tag-dmarcversion.component';

describe('TagDmarcversionComponent', () => {
  let component: TagDmarcversionComponent;
  let fixture: ComponentFixture<TagDmarcversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDmarcversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDmarcversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
