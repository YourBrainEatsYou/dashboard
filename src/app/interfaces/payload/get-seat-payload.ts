import { SeatStatus } from "@/enums/seat-status";
import { UserData } from "@/interfaces/user-data";

export interface GetSeatPayload {
  seat: string;
  availability?: SeatStatus;
  userData?: UserData,
}
