import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IranSanctionRewiewComponent } from './iran-sanction-rewiew.component';

describe('IranSanctionRewiewComponent', () => {
  let component: IranSanctionRewiewComponent;
  let fixture: ComponentFixture<IranSanctionRewiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IranSanctionRewiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IranSanctionRewiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
