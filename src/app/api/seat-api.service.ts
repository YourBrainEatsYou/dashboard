import { AbstractSeatApiService } from "@/api/abstract-seat-api.service";
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
    return this.http.get<Payload<GetSeatPayload[]>>('/seats').pipe(first());
  }
}
