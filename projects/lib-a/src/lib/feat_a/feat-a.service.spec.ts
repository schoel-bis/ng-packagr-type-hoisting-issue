import { TestBed } from '@angular/core/testing';

import { FeatAService } from './feat-a.service';

describe('FeatAService', () => {
  let service: FeatAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
