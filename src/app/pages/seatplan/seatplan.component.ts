import { SeatStatus } from "@/enums/seat-status";
import { Seat } from "@/interfaces/seat";
import { SeatStoreActions } from "@/store/seat";
import { SeatFacadeService } from "@/store/seat/seat-facade.service";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Actions, ofType } from "@ngrx/effects";
import { Observable, takeUntil, Subject } from "rxjs";

@Component({
  selector: 'app-seatplan',
  templateUrl: './seatplan.component.html',
  styleUrls: ['./seatplan.component.scss']
})
export class SeatplanComponent implements OnInit, OnDestroy{
  selectedSeat: Seat | null = null;
  seats$: Observable<Seat[]> = this.seatFacadeService.seats$;

  isPosting$: Observable<boolean> = this.seatFacadeService.isPosting$;

  seatStatus = SeatStatus;

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private seatFacadeService: SeatFacadeService,
    private actions$: Actions,
  ) { }

  ngOnInit() {
    this.actions$.pipe(
      takeUntil(this.destroyed$),
      ofType(SeatStoreActions.reserveSeatSuccess.type)
    ).subscribe(() => {
      this.selectedSeat = null;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSeatSelection(seat: Seat): void{
    if(this.selectedSeat && seat.seat === this.selectedSeat.seat){
      this.selectedSeat = null;
    }else if(seat.availability === SeatStatus.AVAILABLE){
      this.selectedSeat = seat;
    }
  }

  onReserveSeat(){
    if(this.selectedSeat){
      this.seatFacadeService.reserveSeat({seat: this.selectedSeat.seat});
    }
  }
}
