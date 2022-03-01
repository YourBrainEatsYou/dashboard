import { OnboardingFacadeService } from "@/store/onboarding/onboarding-facade.service";
import { UserFacadeService } from "@/store/user/user-facade.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  user$ = this.userFacadeService.user$;
  onboarding$ = this.onboardingFacadeService.onboarding$;

  constructor(
    private userFacadeService: UserFacadeService,
    private onboardingFacadeService: OnboardingFacadeService
  ) {
  }

  ngOnInit(): void {
  }

}
