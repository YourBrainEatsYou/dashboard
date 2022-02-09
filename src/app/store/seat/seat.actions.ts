import { Payload } from "@/interfaces/payload";
import { Seat } from "@/interfaces/seat";
import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

export const loadSeats = createAction(
  '[Seat] Load Seats'
);

export const loadSeatsSuccess = createAction(
  '[Seat] Load Seats Success',
  props<{ payload: Payload<Seat[]> }>()
);

export const loadSeatsFailure = createAction(
  '[Seat] Load Seats Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadSeatsCancel = createAction(
  '[Seat] Load Seats Cancel'
);
