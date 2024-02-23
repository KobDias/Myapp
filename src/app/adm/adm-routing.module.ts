import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADMPage } from './adm.page';

const routes: Routes = [
  {
    path: '',
    component: ADMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADMPageRoutingModule {}
