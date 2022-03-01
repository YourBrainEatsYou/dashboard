import * as fromOnboarding from './onboarding.actions';

describe('loadOnboardings', () => {
  it('should return an action', () => {
    expect(fromOnboarding.loadOnboardings().type).toBe('[Onboarding] Load Onboardings');
  });
});
