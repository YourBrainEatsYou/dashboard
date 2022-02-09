import { SeatType } from "@/enums/seat-type";

export interface GetSeatPayload {
  id: string;
  type: SeatType;
}
