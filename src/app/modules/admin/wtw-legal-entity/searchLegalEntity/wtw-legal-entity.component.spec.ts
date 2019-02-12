import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtwLegalEntityComponent } from './wtw-legal-entity.component';

describe('WtwLegalEntityComponent', () => {
  let component: WtwLegalEntityComponent;
  let fixture: ComponentFixture<WtwLegalEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtwLegalEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtwLegalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
