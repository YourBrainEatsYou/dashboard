import { Payload } from "@/interfaces/payload";
import { OnboardingPayload } from "@/interfaces/payload/onboarding-payload";
import { createAction, props } from '@ngrx/store';

export const loadOnboarding = createAction(
  '[Onboarding] Load Onboarding'
);

export const loadOnboardingSuccess = createAction(
  '[Onboarding] Load Onboarding Success',
  props<{ payload: Payload<OnboardingPayload> }>()
);

export const loadOnboardingFailure = createAction(
  '[Onboarding] Load Onboarding Failure',
  props<{ error: any }>()
);

export const loadOnboardingCancel = createAction(
  '[Onboarding] Load Onboarding Cancel'
);
