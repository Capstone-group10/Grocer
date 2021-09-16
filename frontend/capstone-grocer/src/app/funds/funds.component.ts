import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  addFund = new FormGroup({
    accountNumber: new FormControl("",[Validators.required]),
    amount: new FormControl("",[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  addFundFn(){
    let fundData = this.addFund.value;
    console.log(fundData);
    //call backendService to add fund
  }

}
