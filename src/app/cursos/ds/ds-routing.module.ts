import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsPage } from './ds.page';

const routes: Routes = [
  {
    path: '',
    component: DsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsPageRoutingModule {}
