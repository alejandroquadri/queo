import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StaticService, ContactService } from '../../services';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  @Input() data;
  thanks = false;
  myForm: FormGroup;
  datos: any;
  logoNegro: any;

  public envelope = faEnvelope;
  public telephone = faPhone;

  constructor(
    private staticData: StaticService,
    private contactData: ContactService,
    public fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    // console.log(this.datos);
    this.buildForm();
    this.logoNegro = this.staticData.logoNegro;
    if (this.data) {
      this.datos = JSON.parse(this.data);
      // console.log(this.datos);
    }
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      // telephone: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required]
    });
  }

  submit() {
    this.thanks = true;
    const query = this.myForm.value;
    if (this.data) { query['origin'] = this.datos; }

    this.contactData.saveQuery(query)
    .then( () => console.log('query saved'));
  }

}
