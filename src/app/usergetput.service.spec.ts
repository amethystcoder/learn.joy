import { TestBed } from '@angular/core/testing';

import { UsergetputService } from './usergetput.service';

describe('UsergetputService', () => {
  let service: UsergetputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsergetputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
