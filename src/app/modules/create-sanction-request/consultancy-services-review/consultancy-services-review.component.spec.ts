import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyServicesReviewComponent } from './consultancy-services-review.component';

describe('ConsultancyServicesReviewComponent', () => {
  let component: ConsultancyServicesReviewComponent;
  let fixture: ComponentFixture<ConsultancyServicesReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultancyServicesReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultancyServicesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
