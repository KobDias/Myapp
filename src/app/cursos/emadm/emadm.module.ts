import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmadmPageRoutingModule } from './emadm-routing.module';

import { EmadmPage } from './emadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmadmPageRoutingModule
  ],
  declarations: [EmadmPage]
})
export class EmadmPageModule {}
