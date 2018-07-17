import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepsComponent } from './components/steps/steps.component';
import { TrustQuadriComponent } from './components/trust-quadri/trust-quadri.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADqo_qHiIMLvwZ1H5w4S2MaPiGfrq2IHI'
    }),
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    StepsComponent,
    TrustQuadriComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule,
    FontAwesomeModule,
    StepsComponent,
    TrustQuadriComponent
  ]
})
export class SharedModule { }
