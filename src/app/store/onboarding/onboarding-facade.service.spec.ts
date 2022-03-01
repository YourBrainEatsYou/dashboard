import { TestBed } from '@angular/core/testing';

import { OnboardingFacadeService } from './onboarding-facade.service';

describe('OnboardingFacadeService', () => {
  let service: OnboardingFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
