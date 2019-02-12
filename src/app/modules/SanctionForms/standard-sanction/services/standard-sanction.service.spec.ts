import { TestBed } from '@angular/core/testing';

import { StandardSanctionService } from './standard-sanction.service';

describe('StandardSanctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardSanctionService = TestBed.get(StandardSanctionService);
    expect(service).toBeTruthy();
  });
});
