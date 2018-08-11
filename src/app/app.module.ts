// Angular
// comento el BrowserModule porque queda reemplazado por el BrowserAnimationsModule. Sino traer kilombo al usar lazyloading
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  SharedModule,
  StaticService,
} from './shared';

import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';

// esto es para precargar la data antes que se inicie la aplicacion
export function DataProviderFactory(provider: StaticService) {
  return () => provider.getStaticData();
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductsComponent,
    ProjectsComponent,
    LandingComponent,
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // para la database de siempre
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    NgbModule.forRoot(),
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: DataProviderFactory, deps: [StaticService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
