import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  name = 'Order Status';
  counts = ["pending","shipped","outfordelivery","delivered", "cancelled"];
  orderStatus = "pending"
  user?: any;
  userId = JSON.parse(localStorage.getItem('userId') || "");
  orders?:any;

  constructor(public userService:UserService) { }
  
  ngOnInit(): void {
    this.getUser(this.userId)
    console.log(this.userId)
  }

  getUser(id: any) {
    this.userService.retrieveUserById(id).subscribe(result => {
      console.log(result);
      this.orders = result[0].orders;
      //sort array to get most recent purschase
      this.orders.sort((a:any,b:any)=>{return  <any>new Date(b.date) - <any>new Date(a.date)});
      this.orderStatus = this.orders[0].status;
    })
  }
  
} 
