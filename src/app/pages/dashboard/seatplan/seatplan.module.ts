import { SeatplanRoutingModule } from "@/pages/dashboard/seatplan/seatplan-routing.module";
import { SeatplanComponent } from "@/pages/dashboard/seatplan/seatplan.component";
import { SeatStoreModule } from "@/store/seat/seat-store.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SeatplanComponent,
  ],
  imports: [
    CommonModule,
    SeatStoreModule,
    SeatplanRoutingModule,
  ]
})
export class SeatplanModule { }
