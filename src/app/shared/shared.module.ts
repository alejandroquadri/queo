import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
