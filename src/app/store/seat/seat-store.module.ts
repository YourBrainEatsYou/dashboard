import { seatFeatureKey, reducer } from "@/store/seat/seat.reducer";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { SeatEffects } from './seat.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(seatFeatureKey, reducer),
    EffectsModule.forFeature([SeatEffects])
  ]
})
export class SeatStoreModule {
}
