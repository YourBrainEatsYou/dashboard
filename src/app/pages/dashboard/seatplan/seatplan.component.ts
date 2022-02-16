import { SeatStatus } from "@/enums/seat-status";
import { Seat } from "@/interfaces/seat";
import { UserData } from "@/interfaces/user-data";
import { SeatStoreActions } from "@/store/seat";
import { SeatFacadeService } from "@/store/seat/seat-facade.service";
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Actions, ofType } from "@ngrx/effects";
import { Observable, takeUntil, Subject } from "rxjs";

@Component({
  selector: 'app-seatplan',
  templateUrl: './seatplan.component.html',
  styleUrls: ['./seatplan.component.scss']
})
export class SeatplanComponent implements OnInit, OnDestroy {
  selectedSeat: Seat | null = null;
  seats$: Observable<Seat[]> = this.seatFacadeService.seats$;

  isPosting$: Observable<boolean> = this.seatFacadeService.isPosting$;
  tooltipUser$: Subject<UserData | null> = new Subject<UserData | null>();

  seatStatus = SeatStatus;

  @ViewChild('tooltip') tooltip: ElementRef | undefined;
  @ViewChild('seatplan') seatplan: ElementRef | undefined;

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private seatFacadeService: SeatFacadeService,
    private actions$: Actions
  ) {
  }

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

  onSeatSelection(seat: Seat): void {
    if (this.selectedSeat && seat.seat === this.selectedSeat.seat) {
      this.selectedSeat = null;
    } else if (seat.availability === SeatStatus.AVAILABLE) {
      this.selectedSeat = seat;
    }
  }

  onReserveSeat() {
    if (this.selectedSeat) {
      this.seatFacadeService.reserveSeat({seat: this.selectedSeat.seat});
    }
  }

  onMouseEnter($event: MouseEvent, seat: Seat) {
    if ($event.target) {
      if (seat.userData) {
        if (seat.userData.username) {
          this.tooltipUser$.next(seat.userData);

          // @ts-ignore
          const position = $event.target.getBoundingClientRect() as DOMRect;

          if (this.tooltip && this.seatplan) {
            const seatplanPosition = this.seatplan.nativeElement.getBoundingClientRect();
            this.tooltip.nativeElement.setAttribute(
              'style',
              `top: ${ (position.top - seatplanPosition.top + position.height / 2).toString() }px;
           left: ${ (position.left - seatplanPosition.left + position.width / 2).toString() }px;`
            );
          }
        } else {
        }
      }
    }
  }

  hideTooltip() {
    this.tooltipUser$.next(null);
  }
}
