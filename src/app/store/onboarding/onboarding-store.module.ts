import { onboardingFeatureKey, reducer } from "@/store/onboarding/onboarding.reducer";
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(onboardingFeatureKey, reducer)
  ]
})
export class OnboardingStoreModule {
}
