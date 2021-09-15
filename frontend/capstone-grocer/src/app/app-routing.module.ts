import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpChangePasswordComponent } from './emp-change-password/emp-change-password.component';
import { EmpOrderStatusComponent } from './emp-order-status/emp-order-status.component';
import { EmpRequestsComponent } from './emp-requests/emp-requests.component';
import { EmpResolveTicketsComponent } from './emp-resolve-tickets/emp-resolve-tickets.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

const routes: Routes = [
  {
    path:"employeeDashboard",
    component:EmployeeHomeComponent,
    children:[
    {path:"changeEmployeePassword",component:EmpChangePasswordComponent},
    {path:"empRequest",component:EmpRequestsComponent},
    {path:"empOrderStatus",component:EmpOrderStatusComponent},
    {path:"empResolveTickets",component:EmpResolveTicketsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
