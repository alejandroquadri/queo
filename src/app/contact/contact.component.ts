import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../shared/services/contact.service';
import { SeoService } from '../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('in', [
      state('hide', style({
        visibility: 'hidden',
        opacity: 0
      })),
      state('show',   style({
        visibility: 'visible',
        opacity: 1
      })),
      transition('hide => show', animate('1000ms')),
      transition('show => hide', animate('1000ms'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;
  showMap: boolean;
  thanks = 'hide';

  title = 'My first AGM project';
  lat = -34.606176;
  lng = -58.424542;

  public map = faMapMarker;
  public envelope = faEnvelope;
  public telephone = faPhone;

  constructor(
    private contactData: ContactService,
    private fb: FormBuilder,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.showMap = true;
    }
    if (isPlatformServer(this.platformId)) {
      this.showMap = false;
    }
  }

  ngOnInit() {
    this.buildForm();

    const metaTags = {
      title: `Contacto | Queo`,
      // tslint:disable-next-line:max-line-length
      description: `Telefono: +54 11 4861 0450. Gascon 483, Ciudad autonoma de Buenos Aires. info@queo.com.ar`,
      slug: 'contacto'
    };

    this.seoService.generateTags(metaTags);
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required],
    });
  }

  submit() {
    const query = this.myForm.value;

    query ['origin'] = 'Contacto';
    this.contactData.saveQuery(query)
    .then( () => {
      console.log('query saved');
      this.myForm.reset();
      this.thanks = 'show';
      setTimeout(() => {
        this.thanks = 'hide';
      }, 5000);
    });
  }

}
