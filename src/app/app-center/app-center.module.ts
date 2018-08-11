import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AppCenterRoutingModule } from './app-center-routing.module';

// import { AppCenterComponent } from './app-center.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  imports: [
    AppCenterRoutingModule,
    SharedModule
  ],
  declarations: [
    // AppCenterComponent,
    AppMenuComponent,
    ApplicationComponent
  ]
})
export class AppCenterModule { }
