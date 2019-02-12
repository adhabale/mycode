import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectWithPreviewComponent } from './multi-select-with-preview.component';

describe('MultiSelectWithPreviewComponent', () => {
  let component: MultiSelectWithPreviewComponent;
  let fixture: ComponentFixture<MultiSelectWithPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectWithPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
