import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmadmPage } from './emadm.page';

const routes: Routes = [
  {
    path: '',
    component: EmadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmadmPageRoutingModule {}
