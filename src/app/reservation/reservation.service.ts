import { Injectable } from '@angular/core';
import { ReservationModule } from './reservation.module';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[] = []
  //CRUD

  constructor(){
    let savedReservation = localStorage.getItem("reservations")
    this.reservations = savedReservation ? JSON.parse(savedReservation) : []
  }

  getReservations(): Reservation[]{
    return this.reservations;
  }

  getReservation(id: string) : Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation) :void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation)
    console.log("Add successfully reservation and list reservations now:  \n")
    console.log(this.reservations)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));

  }

  updateReservation(id: string,updateReservation: Reservation): void {
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations[index] = updateReservation;
    this.reservations[index].id = id;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));

  }

}
