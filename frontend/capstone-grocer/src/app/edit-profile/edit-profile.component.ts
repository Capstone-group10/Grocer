import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editUser = new FormGroup({
    password : new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
    phoneNumber: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required])

  })

  constructor() { }

  ngOnInit(): void {
  }

  editUserFn(){
    let userData = this.editUser.value;
    console.log(userData);
    //call editUser service;
  }

}
