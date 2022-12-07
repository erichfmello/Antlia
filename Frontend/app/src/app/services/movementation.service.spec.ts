import { TestBed } from '@angular/core/testing';

import { MovementationService } from './movementation.service';

describe('MovementationService', () => {
  let service: MovementationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
