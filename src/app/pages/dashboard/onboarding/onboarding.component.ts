import { OnboardingFacadeService } from "@/store/onboarding/onboarding-facade.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {

  onboarding$ = this.onboardingFacadeService.onboarding$;

  constructor(
    private onboardingFacadeService: OnboardingFacadeService
  ) {
  }
}
