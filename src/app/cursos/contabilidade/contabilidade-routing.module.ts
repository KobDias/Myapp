import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContabilidadePage } from './contabilidade.page';

const routes: Routes = [
  {
    path: '',
    component: ContabilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilidadePageRoutingModule {}
