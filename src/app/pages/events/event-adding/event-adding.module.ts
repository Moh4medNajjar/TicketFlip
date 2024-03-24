import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventAddingPageRoutingModule } from './event-adding-routing.module';

import { EventAddingPage } from './event-adding.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    IonicModule,
    EventAddingPageRoutingModule
  ],
  declarations: [EventAddingPage]
})
export class EventAddingPageModule {}
