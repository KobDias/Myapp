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
    path: 'ds',
    loadChildren: () => import('./cursos/ds/ds.module').then( m => m.DsPageModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./cursos/adm/adm.module').then( m => m.AdmPageModule)
  },  {
    path: 'enfermagem',
    loadChildren: () => import('./cursos/enfermagem/enfermagem.module').then( m => m.EnfermagemPageModule)
  },
  {
    path: 'contabilidade',
    loadChildren: () => import('./cursos/contabilidade/contabilidade.module').then( m => m.ContabilidadePageModule)
  },
  {
    path: 'logistica',
    loadChildren: () => import('./cursos/logistica/logistica.module').then( m => m.LogisticaPageModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./cursos/seguranca/seguranca.module').then( m => m.SegurancaPageModule)
  },
  {
    path: 'juridicos',
    loadChildren: () => import('./cursos/juridicos/juridicos.module').then( m => m.JuridicosPageModule)
  },
  {
    path: 'emadm',
    loadChildren: () => import('./cursos/emadm/emadm.module').then( m => m.EmadmPageModule)
  },
  {
    path: 'emds',
    loadChildren: () => import('./cursos/emds/emds.module').then( m => m.EmdsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
