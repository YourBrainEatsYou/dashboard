import { SeatplanRoutingModule } from "@/pages/dashboard/seatplan/seatplan-routing.module";
import { SeatplanComponent } from "@/pages/dashboard/seatplan/seatplan.component";
import { SeatStoreModule } from "@/store/seat/seat-store.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    SeatplanComponent
  ],
  imports: [
    CommonModule,
    SeatStoreModule,
    SeatplanRoutingModule
  ]
})
export class SeatplanModule {
}
