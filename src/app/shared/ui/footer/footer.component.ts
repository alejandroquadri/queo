import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebook: faFacebook;
  instagram: faInstagram;
  map: faMapMarker;
  envelope: faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
