import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsuranceTypeComponent } from './edit-insurance-type.component';

describe('EditInsuranceTypeComponent', () => {
  let component: EditInsuranceTypeComponent;
  let fixture: ComponentFixture<EditInsuranceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInsuranceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsuranceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
