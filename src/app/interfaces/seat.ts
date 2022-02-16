import { GetSeatPayload } from "@/interfaces/payload/get-seat-payload";

export interface Seat extends GetSeatPayload {
  x: number;
  y: number;
}
