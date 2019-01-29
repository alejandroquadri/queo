import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { StaticService, BuyModalComponent, SeoService } from '../../shared';

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
  spinner = faSpinner;

  @ViewChild('carousel') carousel;
  carouselInner: any;
  carouselItems: any;
  active: any;

  buyForm: FormGroup;
  colors: any;
  form$: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService,
    private staticData: StaticService,
    public fb: FormBuilder,
    private modalService: NgbModal,
    @Inject(DOCUMENT) document
  ) {
    this.doc = document;
  }

  ngOnInit() {
    this.colKey = this.route.snapshot.paramMap.getAll('col');
    this.prodKey = this.route.snapshot.paramMap.getAll('prod');
    this.product = this.staticData.data.collections[this.colKey].products[this.prodKey];
    this.colors = this.staticData.data.colors;
    if (!this.product) {
      this.router.navigate(['/']);
    }
    this.currentFormat = this.product.format[0];
    this.currentColor = this.currentFormat.colors[0];
    this.imgArray =  this.currentColor.imgs;
    this.buildForm();

    const metaTags = {
      title: `${this.product.name} | Productos ${this.colKey} Queo`,
      // tslint:disable-next-line:max-line-length
      description: this.product.text,
      image: this.product.bgImg,
      slug: `productos/${this.colKey}/${this.prodKey}`,
    };

    this.seoService.generateTags(metaTags);

  }

  cambio(event) {
    // console.log('slide', event);
  }

  buildForm() {
    this.buyForm = this.fb.group({
      format: [this.currentFormat, Validators.required],
      color: [this.currentColor, Validators.required],
      setColors: this.fb.array([]),
      qty: [ 1, Validators.required],
    });
    this.addSet();
    this.formChanges();
  }

  addSet() {
    if (this.currentFormat.set) {

      this.buyForm.get('color').clearValidators();
      this.currentFormat.set.sizes.forEach( (size, index) => {
        this.addSetCont();
        this.setControls.controls[index].patchValue(this.currentColor);
      });
      this.buyForm.get('color').patchValue('');
      this.imgArray =  this.currentFormat.set.imgs;

    } else {

      this.buyForm.patchValue({
        color: this.currentColor
      });
      this.buyForm.get('color').setValidators([Validators.required]);
      this.imgArray =  this.currentColor.imgs;

    }

  }

  // esta funcion de aca abajo es un getter. La uso para poder hacer referencia con
  // mas facilidad. Abajo la referencia
  // https://angular.io/guide/reactive-forms#dynamic-controls-using-form-arrays
  get setControls() {
    return this.buyForm.get('setColors') as FormArray;
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

  addSet2() {
    if (this.currentFormat.set) {

      this.buyForm.get('color').clearValidators();
      const control = <FormArray>this.buyForm.controls['setColors'];

      this.currentFormat.set.sizes.forEach( (size, index) => {

        this.addColor();

        this.setControls.controls[index].patchValue(this.currentColor);
        console.log(this.currentColor, this.currentFormat.colors);
      });
      this.buyForm.get('color').patchValue('');
      this.imgArray =  this.currentFormat.set.imgs;

    } else {

      this.buyForm.patchValue({
        color: this.currentColor
      });
      this.buyForm.get('color').setValidators([Validators.required]);
      this.imgArray =  this.currentColor.imgs;

    }

  }

  addColor() {
    const control = <FormArray>this.buyForm.controls['setColors'];
    control.push(this.initColor());
  }

  initColor() {
    return this.fb.group({
      color: ['', Validators.required]
    })
  }


  formChanges() {
    this.buyForm.controls['format'].valueChanges.subscribe(val => {
      this.currentFormat = val;
      this.currentColor = this.currentFormat.colors[0];
      this.buyForm.controls['setColors'] = this.fb.array([]);
      this.addSet();
    });
    this.buyForm.controls['color'].valueChanges.subscribe(val => {
      this.currentColor = val;
      this.setColorArray();
    });

    // this.buyForm.controls.setColors.controls.valueChanges.subscribe( val => {
    //   console.log('cambio en array', val);
    // });

    this.setControls.valueChanges.subscribe(values => {
      console.log(values);
    });

    this.buyForm.valueChanges.subscribe( val => {
      console.log('cambio el formulario', val);
    });
  }

  changeColor(color) {
    this.buyForm.patchValue({
      color: color
    });
  }

  add() {
    let qty = this.buyForm.controls['qty'].value;
    qty += 1;
    this.buyForm.patchValue({
      qty: qty
    });
  }

  sub() {
    let qty = this.buyForm.controls['qty'].value;
    qty -= 1;
    this.buyForm.patchValue({
      qty: qty
    });
  }

  buy() {
    const buyForm = this.buyForm.value;
    console.log(buyForm);
    const sendForm = {
      product: this.product.name,
      desc: buyForm.format.buyDesc,
      price: buyForm.format.price,
      qty: buyForm.qty
    };
    if (buyForm.setColors.length > 0) {
      const colors = [];
      buyForm.format.set.sizes.forEach( (size, index) => {
        const color = {
          size: size,
          color: buyForm.setColors[index].name
        };
        colors.push(color);
      });
      sendForm['color'] = colors;
      sendForm['set'] = true;
    } else {
      sendForm['color'] = buyForm.color.name;
      sendForm['set'] = false;
    }
    const modalRef = this.modalService.open(BuyModalComponent, {size: 'lg'});
    modalRef.componentInstance.data = JSON.stringify(sendForm);
  }

}
