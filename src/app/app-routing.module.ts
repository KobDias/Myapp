import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module').then( m => m.ADMPageModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module').then( m => m.ADMPageModule)
  },
  {
    path: 'ds',
    loadChildren: () => import('./cursos/ds/ds.module').then( m => m.DsPageModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./cursos/adm/adm.module').then( m => m.AdmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
