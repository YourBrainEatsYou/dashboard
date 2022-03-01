import { AbstractOnboardingApiService } from "@/api/abstract-onboarding-api.service";
import { AppState } from "@/store/app.state";
import { FacadeService } from "@/store/facade.service";
import { OnboardingStoreActions, OnboardingStoreSelectors } from "@/store/onboarding/index";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { finalize, filter, tap, switchMap, catchError, of, EMPTY, share, startWith } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OnboardingFacadeService extends FacadeService {

  private requireOnboarding$ = this.store.select(OnboardingStoreSelectors.selectOnboardingState).pipe(
    finalize(() => this.store.dispatch({type: OnboardingStoreActions.loadOnboardingCancel.type})),
    filter(({isLoading, hasLoaded, error}) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({type: OnboardingStoreActions.loadOnboarding.type})),
    switchMap(() => this.onboardingApiService.getOnboardingIntro().pipe(
      tap((payload) => this.store.dispatch({type: OnboardingStoreActions.loadOnboardingSuccess.type, payload})),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch({type: OnboardingStoreActions.loadOnboardingFailure.type, error});
        return of(EMPTY);
      })
    )),
    share()
  );

  onboarding$ = this.muteFirst(
    this.requireOnboarding$.pipe(startWith(null)),
    this.store.select(OnboardingStoreSelectors.selectOnboarding)
  );

  constructor(
    private store: Store<AppState>,
    private onboardingApiService: AbstractOnboardingApiService
  ) {
    super();
  }
}
