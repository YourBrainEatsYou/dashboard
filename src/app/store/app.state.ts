import { AuthStoreReducer } from '@/store/auth';
import { SeatStoreReducer } from "@/store/seat";


export interface AppState {
  auth: AuthStoreReducer.State;
  seat: SeatStoreReducer.State;
}
