// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// vendor
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';

// componentes
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { StepsComponent } from './components/steps/steps.component';
import { TrustQuadriComponent } from './components/trust-quadri/trust-quadri.component';
import { BlendsComponent } from './components/blends/blends.component';

// directives
import { HoverDirective } from './directives/hover.directive';
import { DimComponent } from './components/dim/dim.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
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
    TrustQuadriComponent,
    HoverDirective,
    BlendsComponent,
    DimComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    FontAwesomeModule,
    StepsComponent,
    TrustQuadriComponent,
    BlendsComponent,
    HoverDirective,
    DimComponent
  ]
})
export class SharedModule { }
