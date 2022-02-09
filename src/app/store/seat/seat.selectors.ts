
import { AppState } from "@/store/app.state";
import { State, seatFeatureKey } from "@/store/seat/seat.reducer";
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

export const selectSeatState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(seatFeatureKey);

// export const {selectAll} = seatEntityAdapter.getSelectors(selectSeatState);
