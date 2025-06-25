import { TestBed } from '@angular/core/testing';

import { FeatBService } from './feat-b.service';

describe('FeatBService', () => {
  let service: FeatBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
