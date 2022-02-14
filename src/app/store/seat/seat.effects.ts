import { AbstractSeatApiService } from "@/api/abstract-seat-api.service";
import { SeatStoreActions } from "@/store/seat/index";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, of, catchError } from "rxjs";



@Injectable()
export class SeatEffects {

  reserveSeat$ = createEffect(() => this.actions$.pipe(
    ofType(SeatStoreActions.reserveSeat.type),
    mergeMap(({reserveSeatDto}) => this.seatApiService.reserveSeat(reserveSeatDto).pipe(
      map(() => ({type: SeatStoreActions.reserveSeatSuccess.type, reserveSeatDto})),
      catchError((error: HttpErrorResponse) => of({
        type: SeatStoreActions.reserveSeatFailure.type,
        error,
      }))
    )),
  ));


  constructor(
    private actions$: Actions,
    private seatApiService: AbstractSeatApiService,
  ) {}

}
