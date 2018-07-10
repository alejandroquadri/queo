import { Component, OnInit } from '@angular/core';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public facebook = faFacebook;
  public instagram = faInstagram;
  public map = faMapMarker;
  public envelope = faEnvelope;
  public telephone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
