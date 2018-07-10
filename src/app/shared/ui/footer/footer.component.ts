import { Component, OnInit } from '@angular/core';
import { faCoffee, faFacebook, faInstagram, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public facebook = faCoffee;
  public instagram = faInstagram;
  public map = faMapMarker;
  public envelope = faEnvelope;
  public telephone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
