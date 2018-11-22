import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StaticService, ContactService } from '../../services';

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
    public activeModal: NgbActiveModal,
    private contactData: ContactService
  ) {
    this.logoNegro = this.staticData.logoNegro;
    this.colors = this.staticData.data.colors;
  }

  ngOnInit() {
    this.datos = JSON.parse(this.data);
    console.log(this.datos);
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      query: ['']
    });
  }

  submit() {
    const query = this.myForm.value;

    let readablePurchase;
    if (!this.datos.set) {
      readablePurchase =  `${this.datos.qty}  ${this.datos.desc } color ${this.colors[this.datos.color].name}`;
    } else {
      readablePurchase = `${this.datos.qty} ${this.datos.desc}`;
      this.datos.color.forEach( item => {
        readablePurchase += `\n${ item.size } color ${ this.colors[item.color].name }`;
      });
    }

    query['origin'] = 'Compra';
    query['purchase'] = this.datos;
    query['readablePurchase'] = readablePurchase;

    this.contactData.saveQuery(query)
    .then( () => {
      this.thanks = true;
    });
  }

}
