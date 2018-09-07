import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { StaticService } from '../../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  doc: any;
  colKey: any;
  prodKey: any;
  product: any;
  currentFormat: any;
  currentColor: any;
  imgArray: Array<any>;
  showFormat: any;

  @ViewChild('carousel') carousel;
  carouselInner: any;
  carouselItems: any;
  active: any;

  buyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staticData: StaticService,
    public fb: FormBuilder,
    @Inject(DOCUMENT) document
  ) {
    this.doc = document;
  }

  ngOnInit() {
    this.colKey = this.route.snapshot.paramMap.getAll('col');
    this.prodKey = this.route.snapshot.paramMap.getAll('prod');
    this.product = this.staticData.data.collections[this.colKey].products[this.prodKey];
    if (!this.product) {
      this.router.navigate(['/']);
    }
    this.currentFormat = this.product.format[0];
    this.currentColor = this.currentFormat.colors[0];
    this.imgArray =  this.currentColor.imgs;
    this.buildForm();
  }

  cambio(event) {
    console.log('slide', event);
  }

  buildForm() {
    this.buyForm = this.fb.group({
      format: [this.currentFormat, Validators.required],
      color: [this.currentColor, Validators.required],
      set: this.fb.array([]),
      qty: [ 1, Validators.required],
    });
    this.formChanges();
  }

  addSet() {
    console.log('viene al addSet');
    if (this.currentFormat.set) {
      this.buyForm.get('color').clearValidators();
      this.currentFormat.set.sizes.forEach( (size, index) => {
        this.addSetCont();
        this.setControls.controls[index].setValue(this.currentColor);
      });
      this.buyForm.get('color').setValue('');
      this.imgArray =  this.currentFormat.set.imgs;
    } else {
      this.buyForm.controls['set'] = this.fb.array([]);
      this.buyForm.patchValue({
        color: this.currentColor
      });
      this.buyForm.get('color').setValidators([Validators.required]);
      this.imgArray =  this.currentColor.imgs;
    }
  }

  // esta funcion de aca abajo es un getter. La so para poder hacer referencia con
  // mas facilidad. Abajo la referencia
  // https://angular.io/guide/reactive-forms#dynamic-controls-using-form-arrays
  get setControls() {
    return this.buyForm.get('set') as FormArray;
  }

  addSetCont() {
    this.setControls.push(this.fb.control([Validators.required]));
  }

  setColorArray() {
    if (this.currentFormat.set) {
      this.imgArray = this.currentFormat.set.imgs;
    } else {
      this.imgArray = this.currentColor.imgs;
    }
  }

  formChanges() {
    this.buyForm.controls['format'].valueChanges.subscribe(val => {
      this.currentFormat = val;
      this.currentColor = this.currentFormat.colors[0];
      console.log('cambio formato', this.currentFormat, this.currentColor);
      this.addSet();
      // this.buyForm.get('color').updateValueAndValidity();
    });
    this.buyForm.controls['color'].valueChanges.subscribe(val => {
      console.log('cambio color');
      this.currentColor = val;
      this.setColorArray();
    });
  }

  changeColor(color) {
    this.buyForm.patchValue({
      color: color
    });
  }

  buy() {
    console.log(this.buyForm.value);
  }

}
