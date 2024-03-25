import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperUserPageRoutingModule } from './super-user-routing.module';

import { SuperUserPage } from './super-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperUserPageRoutingModule
  ],
  declarations: [SuperUserPage]
})
export class SuperUserPageModule {}
