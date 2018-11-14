import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StaticService } from '../../services';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {

  @Input() data;
  thanks = false;
  myForm: FormGroup;
  datos: any;
  logoNegro: any;
  colors: any;

  constructor(
    private staticData: StaticService,
    public fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.logoNegro = this.staticData.logoNegro;
    this.colors = this.staticData.data.colors;
  }

  ngOnInit() {
    this.datos = JSON.parse(this.data);
    // console.log(this.datos);
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      obs: ['', Validators.required]
    });
  }

  submit() {
    this.thanks = true;
    console.log(this.myForm.value);
  }

}
