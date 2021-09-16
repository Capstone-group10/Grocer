import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FundsComponent } from './funds/funds.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusComponent,
    EditProfileComponent,
    FundsComponent,
    RaiseTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
