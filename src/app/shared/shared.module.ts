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
import { DimComponent } from './components/dim/dim.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { BuyModalComponent } from './components/buy-modal/buy-modal.component';
import { TerrazzoComponent } from './components/terrazzo/terrazzo.component';
import { CtaButtonsComponent } from './components/cta-buttons/cta-buttons.component';

// directives
import { HoverDirective } from './directives/hover.directive';

// Pipes
import { ToArrayPipe } from './pipes/to-array.pipe';
import { SortPipe } from './pipes/sort.pipe';

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
    DimComponent,
    ApplicationsComponent,
    ToArrayPipe,
    SortPipe,
    BuyModalComponent,
    TerrazzoComponent,
    CtaButtonsComponent
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
    DimComponent,
    ApplicationsComponent,
    ToArrayPipe,
    SortPipe,
    BuyModalComponent,
    TerrazzoComponent,
    CtaButtonsComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
