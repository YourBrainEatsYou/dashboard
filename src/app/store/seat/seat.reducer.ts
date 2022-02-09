import { Seat } from "@/interfaces/seat";
import { loadSeats, loadSeatsSuccess, loadSeatsFailure, loadSeatsCancel } from "@/store/seat/seat.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from '@ngrx/store';


export const seatFeatureKey = 'seat';

export const seatEntityAdapter = createEntityAdapter<Seat>();

export interface State extends EntityState<Seat> {
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = seatEntityAdapter.getInitialState({
  isLoading: false,
  hasLoaded: false,
  error: null
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
  })
);
