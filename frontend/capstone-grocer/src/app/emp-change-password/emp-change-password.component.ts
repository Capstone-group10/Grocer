import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-emp-change-password',
  templateUrl: './emp-change-password.component.html',
  styleUrls: ['./emp-change-password.component.css']
})
export class EmpChangePasswordComponent implements OnInit {

  passwordRef = new FormGroup({
    newPassword:new FormControl()
  })
  msg?:string;

  constructor(
    public empSer:EmployeeService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  changePassword(){
    let newPassword = this.passwordRef.value;
    this.empSer.changePassword(newPassword).subscribe(result=>{
      if(result=="Record updated succesfully"){
        this.msg = "Password Updated Successfully";
      }
      else{
        this.msg = "Password Has Not Changed"
      }
    },
    error=>console.log(error));
    this.passwordRef.reset();
  }

}
