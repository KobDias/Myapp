import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContabilidadePageRoutingModule } from './contabilidade-routing.module';

import { ContabilidadePage } from './contabilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContabilidadePageRoutingModule
  ],
  declarations: [ContabilidadePage]
})
export class ContabilidadePageModule {}
