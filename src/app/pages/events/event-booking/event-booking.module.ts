import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventBookingPageRoutingModule } from './event-booking-routing.module';

import { EventBookingPage } from './event-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventBookingPageRoutingModule
  ],
  declarations: [EventBookingPage]
})
export class EventBookingPageModule {}
