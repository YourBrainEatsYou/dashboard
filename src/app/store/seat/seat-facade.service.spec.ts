import { TestBed } from '@angular/core/testing';

import { SeatFacadeService } from './seat-facade.service';

describe('SeatFacadeService', () => {
  let service: SeatFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
