import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuridicosPageRoutingModule } from './juridicos-routing.module';

import { JuridicosPage } from './juridicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuridicosPageRoutingModule
  ],
  declarations: [JuridicosPage]
})
export class JuridicosPageModule {}
