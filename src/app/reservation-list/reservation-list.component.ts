import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  
  constructor(private serviceReservation : ReservationService){

  }

  reservations : Reservation[] = []

  ngOnInit(): void {
    this.reservations = this.serviceReservation.getReservations()
  }

  deleteReservation(i: string){
    this.serviceReservation.deleteReservation(i)
  }
}
