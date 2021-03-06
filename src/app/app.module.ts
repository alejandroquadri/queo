// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTransferStateModule } from '@angular/platform-browser';
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
import { WINDOW_PROVIDERS } from './shared/services/window.service';

import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { EmailCaptureComponent } from './shared/components/email-capture/email-capture.component';

// esto es para precargar la data antes que se inicie la aplicacion
export function DataProviderFactory(provider: StaticService) {
  return () => provider.getStaticData();
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProjectsComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'queo' }),
    BrowserTransferStateModule,
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
  entryComponents: [
    EmailCaptureComponent
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: DataProviderFactory, deps: [StaticService], multi: true },
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
