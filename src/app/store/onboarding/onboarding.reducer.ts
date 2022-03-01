import { OnboardingPayload } from "@/interfaces/payload/onboarding-payload";
import {
  loadOnboarding,
  loadOnboardingSuccess,
  loadOnboardingFailure,
  loadOnboardingCancel
} from "@/store/onboarding/onboarding.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { createReducer, on } from '@ngrx/store';


export const onboardingFeatureKey = 'onboarding';

export interface State {
  isLoading: boolean;
  hasLoaded: boolean;
  error: null | HttpErrorResponse;

  onboarding: OnboardingPayload | null;
}

export const initialState: State = {
  isLoading: false,
  hasLoaded: false,
  error: null,

  onboarding: null
};

export const reducer = createReducer(
  initialState,

  on(loadOnboarding, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),

  on(loadOnboardingSuccess, (state: State, {payload}) => {
    return {
      ...state,
      isLoading: false,
      hasLoaded: true,
      onboarding: payload.data,
      error: null
    };
  }),

  on(loadOnboardingFailure, (state: State, {error}) => {
    return {
      ...state,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),

  on(loadOnboardingCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
      error: null
    };
  })
);
