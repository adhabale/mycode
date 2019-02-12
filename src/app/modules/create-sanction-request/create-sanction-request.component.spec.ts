import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSanctionRequestComponent } from './create-sanction-request.component';

describe('CreateSanctionRequestComponent', () => {
  let component: CreateSanctionRequestComponent;
  let fixture: ComponentFixture<CreateSanctionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSanctionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSanctionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
