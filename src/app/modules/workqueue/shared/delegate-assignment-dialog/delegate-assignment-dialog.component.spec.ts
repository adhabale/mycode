import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateAssignmentDialogComponent } from './delegate-assignment-dialog.component';

describe('DelegateAssignmentDialogComponent', () => {
  let component: DelegateAssignmentDialogComponent;
  let fixture: ComponentFixture<DelegateAssignmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegateAssignmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateAssignmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
