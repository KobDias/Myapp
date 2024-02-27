import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmdsPageRoutingModule } from './emds-routing.module';

import { EmdsPage } from './emds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmdsPageRoutingModule
  ],
  declarations: [EmdsPage]
})
export class EmdsPageModule {}
