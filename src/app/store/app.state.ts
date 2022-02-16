import { AuthStoreReducer } from '@/store/auth';
import { SeatStoreReducer } from "@/store/seat";
import { UserStoreReducer } from "@/store/user";


export interface AppState {
  auth: AuthStoreReducer.State;
  seat: SeatStoreReducer.State;
  user: UserStoreReducer.State;
}
