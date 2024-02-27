import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfermagemPage } from './enfermagem.page';

const routes: Routes = [
  {
    path: '',
    component: EnfermagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfermagemPageRoutingModule {}
