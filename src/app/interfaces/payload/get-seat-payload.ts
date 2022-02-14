import { SeatStatus } from "@/enums/seat-status";

export interface GetSeatPayload {
  seat: string;
  availability?: SeatStatus;
  userData?: {},
}
