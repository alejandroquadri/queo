import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import { StaticService, ContactService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-capture',
  templateUrl: './email-capture.component.html',
  styleUrls: ['./email-capture.component.scss']
})
export class EmailCaptureComponent implements OnInit {

  emailForm: FormGroup;
  public facebook = faFacebook;
  public instagram = faInstagram;
  public pinterest = faPinterest;

  constructor(
    private staticData: StaticService,
    public fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private contactData: ContactService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
    });
  }

  submit() {
    const email = this.emailForm.value.email;
    this.activeModal.close();

    this.contactData.captureEmail(email)
    .then( () => {
      // console.log(email);
    });
  }

}
