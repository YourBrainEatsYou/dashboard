import { AppState } from "@/store/app.state";
import { State, seatFeatureKey, seatEntityAdapter } from "@/store/seat/seat.reducer";
import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';

const getIsPosting = (state: State) => state.isPosting;


export const selectSeatState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(seatFeatureKey);

export const {selectAll} = seatEntityAdapter.getSelectors(selectSeatState);

export const selectIsPosting: MemoizedSelector<AppState, boolean> = createSelector(
  selectSeatState,
  getIsPosting
);
