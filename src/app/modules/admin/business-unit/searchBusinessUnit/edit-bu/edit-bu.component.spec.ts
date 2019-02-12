import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuComponent } from './edit-bu.component';

describe('EditBuComponent', () => {
  let component: EditBuComponent;
  let fixture: ComponentFixture<EditBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
