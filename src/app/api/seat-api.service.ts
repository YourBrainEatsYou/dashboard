import { AbstractSeatApiService } from "@/api/abstract-seat-api.service";
import { ReserveSeatDto } from "@/interfaces/dto/reserve-seat-dto";
import { Payload } from "@/interfaces/payload";
import { GetSeatPayload } from "@/interfaces/payload/get-seat-payload";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, first } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SeatApiService implements AbstractSeatApiService{

  constructor(
    private http: HttpClient
  ) { }

  getSeats(): Observable<Payload<GetSeatPayload[]>> {
    return this.http.get<Payload<GetSeatPayload[]>>('/seat/list').pipe(first());
  }

  reserveSeat(reserveSeatDto: ReserveSeatDto): Observable<Payload<null>> {
    return this.http.patch<Payload<null>>('/seat/reserve', {...reserveSeatDto}).pipe(first());
  }
}
