import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCommentComponent } from './query-comment.component';

describe('QueryCommentComponent', () => {
  let component: QueryCommentComponent;
  let fixture: ComponentFixture<QueryCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
