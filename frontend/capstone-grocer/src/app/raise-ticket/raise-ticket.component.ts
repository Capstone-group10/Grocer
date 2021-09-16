import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  raiseTicket = new FormGroup({
    userID: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    reason: new FormControl("",[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  raiseTicketFn(){
    let ticketData = this.raiseTicket.value;
    console.log(ticketData);
    //call backend service for raise ticket;
  }
}
