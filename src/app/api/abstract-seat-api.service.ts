import { ReserveSeatDto } from "@/interfaces/dto/reserve-seat-dto";
import { Payload } from "@/interfaces/payload";
import { GetSeatPayload } from "@/interfaces/payload/get-seat-payload";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractSeatApiService {
  public abstract getSeats(): Observable<Payload<GetSeatPayload[]>>;

  public abstract reserveSeat(reserveSeatDto: ReserveSeatDto): Observable<Payload<null>>;
}
