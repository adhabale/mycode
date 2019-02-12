import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSanctionReviewComponent } from './standard-sanction-review.component';

describe('StandardSanctionReviewComponent', () => {
  let component: StandardSanctionReviewComponent;
  let fixture: ComponentFixture<StandardSanctionReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSanctionReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSanctionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
