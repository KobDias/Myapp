import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfermagemPageRoutingModule } from './enfermagem-routing.module';

import { EnfermagemPage } from './enfermagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfermagemPageRoutingModule
  ],
  declarations: [EnfermagemPage]
})
export class EnfermagemPageModule {}
