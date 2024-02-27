import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmdsPage } from './emds.page';

const routes: Routes = [
  {
    path: '',
    component: EmdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmdsPageRoutingModule {}
