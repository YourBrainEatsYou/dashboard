import { OnboardingStoreModule } from "@/store/onboarding/onboarding-store.module";
import { UserStoreModule } from "@/store/user/user-store.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    OnboardingStoreModule,
    UserStoreModule,
    TicketRoutingModule
  ]
})
export class TicketModule {
}
