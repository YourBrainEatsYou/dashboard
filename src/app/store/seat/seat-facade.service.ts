import { AbstractSeatApiService } from "@/api/abstract-seat-api.service";
import { SeatType } from "@/enums/seat-type";
import { Seat } from "@/interfaces/seat";
import { AppState } from "@/store/app.state";
import { FacadeService } from "@/store/facade.service";
import { SeatStoreActions } from "@/store/seat/index";
import { selectSeatState } from "@/store/seat/seat.selectors";
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { finalize, tap, filter, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SeatFacadeService extends FacadeService {

  private requireSeats$ = this.store.select(selectSeatState).pipe(
    finalize(() => this.store.dispatch({type: SeatStoreActions.loadSeatsCancel.type})),
    filter(({isLoading, hasLoaded, error}) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({type: SeatStoreActions.loadSeats.type})),
    switchMap(() => this.seatApiService.getSeats().pipe(
      tap((payload) => {
        // merge the seats
        const {seats, seatsMap} = this.prepareSeats();

        const mergedSeats = payload.data.map((payloadSeat) => {
          const preparedSeat = seats[seatsMap.indexOf(payloadSeat.id)];
          return {
            id: payloadSeat.id,
            type: payloadSeat.type,
            x: preparedSeat.x,
            y: preparedSeat.y
          };
        });

        const mergedSeatsPayload = {
          ...payload,
          data: mergedSeats,
        }

        this.store.dispatch({type: SeatStoreActions.loadSeatsSuccess.type, payload: mergedSeatsPayload});
      })
    )),
  );

  constructor(
    private store: Store<AppState>,
    private seatApiService: AbstractSeatApiService,
  ) {
    super();
  }

  private prepareSeats(): {seats: Seat[], seatsMap: string[]} {
    const seats: Seat[] = [];
    const seatsMap: string[] = [];

    let id = '';

    const xAxis = [
      {id: 'a', offset: 216},
      {id: 'b', offset: 360},
      {id: 'c', offset: 456},
      {id: 'd', offset: 600},
      {id: 'e', offset: 696},
      {id: 'f', offset: 840},
      {id: 'g', offset: 936},
      {id: 'h', offset: 1080},
      {id: 'i', offset: 1176},
      {id: 'j', offset: 1320},
    ];
    const yAxis = [
      {id: 1, offset: 144},
      {id: 2, offset: 240},
      {id: 3, offset: 336},
      {id: 4, offset: 480},
      {id: 5, offset: 576},
      {id: 6, offset: 672},
      {id: 7, offset: 768},
    ];
    const specialX = [
      {id: 'k', offset: 1416},
      {id: 'l', offset: 1560},
    ];
    const specialY = [
      {id: 1, offset: 48},
      {id: 2, offset: 144},
      {id: 3, offset: 240},
      {id: 4, offset: 672},
      {id: 5, offset: 768},
    ];

    // regular Rows
    xAxis.forEach((x) => {
      yAxis.forEach((y) => {
        id = `${x.id.toUpperCase()}${y.id.toString(10)}`
        seatsMap.push(id);
        seats.push({
          id,
          x: x.offset,
          y: x.offset,
          type: SeatType.AVAILABLE
        });
      })
    });

    // Rows K & L
    specialX.forEach((x) => {
      specialY.forEach((y) => {
        id = `${x.id.toUpperCase()}${y.id.toString(10)}`
        seatsMap.push(id);
        seats.push({
          id,
          x: x.offset,
          y: x.offset,
          type: SeatType.AVAILABLE
        });
      })
    });

    return {
      seats,
      seatsMap
    }
  }
}
