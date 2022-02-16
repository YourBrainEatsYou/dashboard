import { TestBed } from '@angular/core/testing';

import { SeatApiService } from './seat-api.service';

describe('SeatApiService', () => {
  let service: SeatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
