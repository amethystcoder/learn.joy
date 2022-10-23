import { TestBed } from '@angular/core/testing';

import { TestquestionsService } from './testquestions.service';

describe('TestquestionsService', () => {
  let service: TestquestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestquestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
