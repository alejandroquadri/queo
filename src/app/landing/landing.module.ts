import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
