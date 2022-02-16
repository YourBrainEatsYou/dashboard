import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SeatEffects } from './seat.effects';

describe('SeatEffects', () => {
  let actions$: Observable<any>;
  let effects: SeatEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeatEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SeatEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
