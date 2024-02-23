import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADMPageRoutingModule } from './adm-routing.module';

import { ADMPage } from './adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ADMPageRoutingModule
  ],
  declarations: [ADMPage]
})
export class ADMPageModule {}
