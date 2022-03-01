import { Payload } from "@/interfaces/payload";
import { OnboardingPayload } from "@/interfaces/payload/onboarding-payload";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractOnboardingApiService {
  public abstract getOnboardingIntro(): Observable<Payload<OnboardingPayload>>;
}
