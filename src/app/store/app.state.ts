import { AuthStoreReducer } from '@/store/auth';
import { OnboardingStoreReducer } from "@/store/onboarding";
import { SeatStoreReducer } from "@/store/seat";
import { UserStoreReducer } from "@/store/user";


export interface AppState {
  auth: AuthStoreReducer.State;
  seat: SeatStoreReducer.State;
  user: UserStoreReducer.State;
  onboarding: OnboardingStoreReducer.State;
}
