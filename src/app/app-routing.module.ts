import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'productos', loadChildren: './products/products.module#ProductsModule' },
  { path: 'inspiracion', component: ProjectsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nosotros', component: AboutComponent},
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // esta opcion es para que cuando cambie la ruta, scrollee al tope de pagina
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
