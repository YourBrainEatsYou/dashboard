import { SeatType } from "@/enums/seat-type";
import { Seat } from "@/interfaces/seat";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seatplan',
  templateUrl: './seatplan.component.html',
  styleUrls: ['./seatplan.component.scss']
})
export class SeatplanComponent implements OnInit {


  selectedSeat: Seat | null = null;

  private xAxis = [
    {id: 'a', offset: 216},
    {id: 'b', offset: 360},
    {id: 'c', offset: 456},
    {id: 'd', offset: 600},
    {id: 'e', offset: 696},
    {id: 'f', offset: 840},
    {id: 'g', offset: 936},
    {id: 'h', offset: 1080},
    {id: 'i', offset: 1176},
    {id: 'j', offset: 1320},
  //  {id: 'k', offset: 1416},
  //  {id: 'l', offset: 1560},
  ];

  private yAxis = [
    {id: 1, offset: 144},
    {id: 2, offset: 240},
    {id: 3, offset: 336},
    {id: 4, offset: 480},
    {id: 5, offset: 576},
    {id: 6, offset: 672},
    {id: 7, offset: 768},
  ];

  private specialX = [
    {id: 'k', offset: 1416},
    {id: 'l', offset: 1560},
  ];

  private specialY = [
    {id: 1, offset: 48},
    {id: 2, offset: 144},
    {id: 3, offset: 240},
    {id: 4, offset: 672},
    {id: 5, offset: 768},
  ]

  seats: Seat[] = [];

  constructor() { }

  ngOnInit(): void {
    // regular Rows
    this.xAxis.forEach((xAxis) => {
      this.yAxis.forEach((yAxis) => {
        this.seats.push({
          id: `${xAxis.id.toUpperCase()}${yAxis.id.toString(10)}`,
          x: xAxis.offset,
          y: yAxis.offset,
          type: SeatType.AVAILABLE
        });
      })
    });

    // Rows K & L
    this.specialX.forEach((xAxis) => {
      this.specialY.forEach((yAxis) => {
        this.seats.push({
          id: `${xAxis.id.toUpperCase()}${yAxis.id.toString(10)}`,
          x: xAxis.offset,
          y: yAxis.offset,
          type: SeatType.AVAILABLE
        });
      })
    });
  };

  onSeatSelection(seat: Seat): void{
    if(this.selectedSeat && seat.id === this.selectedSeat.id){
      this.selectedSeat = null;
    }else{
      this.selectedSeat = seat;
    }
  }
}
