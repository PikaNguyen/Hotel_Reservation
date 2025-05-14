import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm : FormGroup = new FormGroup({

  });

  constructor(private formBuilder : FormBuilder){
    
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate : ['', Validators.required],
      checkOutDate : ['', Validators.required],
      guessName : ['', Validators.required],
      guessEmail : ['', [Validators.required, Validators.email]],
      roomNumber : ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.reservationForm.valid){
      console.log("Form input valid")
    } else {console.log("Some fields are wrong")}
  }
}
