import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledGoodsReviewComponent } from './controlled-goods-review.component';

describe('ControlledGoodsReviewComponent', () => {
  let component: ControlledGoodsReviewComponent;
  let fixture: ComponentFixture<ControlledGoodsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlledGoodsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledGoodsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
