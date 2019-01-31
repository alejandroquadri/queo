import { Component, OnInit } from '@angular/core';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { EmailCaptureComponent } from '../../components/email-capture/email-capture.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public facebook = faFacebook;
  public instagram = faInstagram;
  public pinterest = faPinterest;
  public map = faMapMarker;
  public envelope = faEnvelope;
  public telephone = faPhone;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  captureMail() {
    const modalRef = this.modalService.open(EmailCaptureComponent, { centered: true});
  }

}
