import { OnboardingPayload } from "@/interfaces/payload/onboarding-payload";
import { AppState } from "@/store/app.state";
import { State, onboardingFeatureKey } from "@/store/onboarding/onboarding.reducer";
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getOnboarding = (state: State) => state.onboarding;

export const selectOnboardingState: MemoizedSelector<AppState, State> = createFeatureSelector(onboardingFeatureKey);

export const selectOnboarding: MemoizedSelector<AppState, OnboardingPayload | null> = createSelector(
  selectOnboardingState,
  getOnboarding
);

