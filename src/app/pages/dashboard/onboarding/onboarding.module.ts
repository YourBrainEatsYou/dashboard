import { OnboardingStoreModule } from "@/store/onboarding/onboarding-store.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from '../onboarding/onboarding.component';

import { OnboardingRoutingModule } from './onboarding-routing.module';


@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    OnboardingStoreModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule {
}
