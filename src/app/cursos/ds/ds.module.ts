import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DsPageRoutingModule } from './ds-routing.module';

import { DsPage } from './ds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DsPageRoutingModule
  ],
  declarations: [DsPage]
})
export class DsPageModule {}
