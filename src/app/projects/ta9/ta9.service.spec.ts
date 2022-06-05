import { TestBed } from '@angular/core/testing';

import { Ta9Service } from './ta9.service';

describe('Ta9Service', () => {
  let service: Ta9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ta9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
