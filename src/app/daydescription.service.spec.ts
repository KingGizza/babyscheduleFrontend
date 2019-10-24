import { TestBed } from '@angular/core/testing';

import { DaydescriptionService } from './daydescription.service';

describe('DaydescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaydescriptionService = TestBed.get(DaydescriptionService);
    expect(service).toBeTruthy();
  });
});
