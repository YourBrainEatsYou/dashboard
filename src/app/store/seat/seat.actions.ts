import { ReserveSeatDto } from "@/interfaces/dto/reserve-seat-dto";
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

export const reserveSeat = createAction(
  '[Seat] Reserve Seat',
  props<{ reserveSeatDto: ReserveSeatDto }>()
);

export const reserveSeatSuccess = createAction(
  '[Seat] Reserve Seat Success',
  props<{ reserveSeatDto: ReserveSeatDto }>()
);

export const reserveSeatFailure = createAction(
  '[Seat] Reserve Seat Success',
  props<{ error: HttpErrorResponse }>()
);

