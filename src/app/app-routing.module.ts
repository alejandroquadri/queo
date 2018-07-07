import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'aplicaciones', component: ApplicationsComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'inspiracion', component: ProjectsComponent },
  { path: 'contacto', component: ContactComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
