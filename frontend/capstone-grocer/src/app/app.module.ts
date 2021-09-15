import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmpChangePasswordComponent } from './emp-change-password/emp-change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpRequestsComponent } from './emp-requests/emp-requests.component';
import { EmpOrderStatusComponent } from './emp-order-status/emp-order-status.component';
import { EmpResolveTicketsComponent } from './emp-resolve-tickets/emp-resolve-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    EmpChangePasswordComponent,
    EmpRequestsComponent,
    EmpOrderStatusComponent,
    EmpResolveTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
