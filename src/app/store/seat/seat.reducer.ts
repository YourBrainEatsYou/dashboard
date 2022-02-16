import { SeatStatus } from "@/enums/seat-status";
import { Seat } from "@/interfaces/seat";
import {
  loadSeats,
  loadSeatsSuccess,
  loadSeatsFailure,
  loadSeatsCancel,
  reserveSeat,
  reserveSeatSuccess,
  reserveSeatFailure
} from "@/store/seat/seat.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from '@ngrx/store';


export const seatFeatureKey = 'seat';

export const seatEntityAdapter = createEntityAdapter<Seat>({
  selectId: (seat) => seat.seat
});

export interface State extends EntityState<Seat> {
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;

  isPosting: boolean;
}

export const initialState: State = seatEntityAdapter.getInitialState({
  isLoading: false,
  hasLoaded: false,
  error: null,

  isPosting: false
});

export const reducer = createReducer(
  initialState,
  on(loadSeats, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),
  on(loadSeatsSuccess, (state: State, {payload}) => {
    return seatEntityAdapter.addMany(payload.data, {
      ...state,
      isLoading: false,
      hasLoaded: true,
      error: null
    });
  }),
  on(loadSeatsFailure, (state: State, {error}) => {
    return {
      ...state,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),
  on(loadSeatsCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
      error: null
    };
  }),

  on(reserveSeat, (state: State) => {
    return {
      ...state,
      isPosting: true
    };
  }),
  on(reserveSeatSuccess, (state: State, {reserveSeatDto}) => {
    return seatEntityAdapter.map((entity) => {
      if (entity.availability === SeatStatus.ME) {
        return {
          ...entity,
          availability: SeatStatus.AVAILABLE
        };
      }
      if (entity.seat === reserveSeatDto.seat) {
        return {
          ...entity,
          availability: SeatStatus.ME
        };
      }
      return {
        ...entity
      };
    }, {
      ...state,
      isPosting: false
    });

  }),
  on(reserveSeatFailure, (state: State) => {
    return {
      ...state,
      isPosting: false
    };
  })
);
