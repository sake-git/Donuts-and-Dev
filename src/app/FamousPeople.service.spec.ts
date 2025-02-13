import { TestBed } from '@angular/core/testing';

import { CsHallOfFameService } from './FamousPeopleservice';

describe('CsHallOfFameService', () => {
  let service: CsHallOfFameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsHallOfFameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
