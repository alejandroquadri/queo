import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppCenterComponent } from './app-center.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {
    path: '',
    component: AppMenuComponent
  },
  {
    path: ':id',
    component: ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCenterRoutingModule { }

// const routes: Routes = [{
//   path: '',
//   component: AppCenterComponent,
//   children: [
//     { path: '', redirectTo: 'pepe1', pathMatch: 'full' },
//     {
//       path: 'pepe1',
//       component: AppMenuComponent
//     },
//     {
//       path: 'aplicaciones/:id',
//       component: ApplicationComponent
//     }
//   ]}
// ];
