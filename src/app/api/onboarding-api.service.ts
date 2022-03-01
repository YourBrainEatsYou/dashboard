import { AbstractOnboardingApiService } from "@/api/abstract-onboarding-api.service";
import { Payload } from "@/interfaces/payload";
import { OnboardingPayload } from "@/interfaces/payload/onboarding-payload";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OnboardingApiService implements AbstractOnboardingApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getOnboardingIntro(): Observable<Payload<OnboardingPayload>> {
    return this.http.get<Payload<OnboardingPayload>>('/onboarding/intro');
  }
}
