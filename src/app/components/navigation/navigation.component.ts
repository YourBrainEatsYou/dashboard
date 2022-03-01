import { OnboardingFacadeService } from "@/store/onboarding/onboarding-facade.service";
import { Component } from '@angular/core';
import { switchMap, of } from "rxjs";

interface NavigationItem {
  name: string,
  path: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  navigation$ = this.onboardingFacadeService.onboarding$.pipe(
    switchMap((onboardingPayload) => {
      const nav: NavigationItem[] = [];
      nav.push({
        name: 'Dashboard',
        path: '/dashboard/my'
      });

      if (onboardingPayload && onboardingPayload.steps.ticketPayed) {
        nav.push({
          name: 'Seatplan',
          path: '/dashboard/seatplan'
        });
        nav.push({
          name: 'Ticket',
          path: '/dashboard/ticket'
        });
      }
      return of(nav);
    })
  );

  constructor(
    private onboardingFacadeService: OnboardingFacadeService
  ) {
  }
}
