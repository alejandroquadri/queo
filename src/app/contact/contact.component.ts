import { Component, OnInit, Renderer } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { ContactFormService } from './contact-form.service';

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

  thanks = 'hide';

  title = 'My first AGM project';
  lat = -34.606176;
  lng = -58.424542;

  constructor(
    private formData: ContactFormService,
    private fb: FormBuilder,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required],
    });
  }

  submit(){
    console.log(this.myForm.value);
    // this.formData.saveReq(this.myForm.value);
    this.myForm.reset();
    this.thanks = 'show';
    setTimeout(() => {
      this.thanks = 'hide';
    }, 5000);
  }

}
