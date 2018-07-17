import { Component, OnInit } from '@angular/core';
import { faLightbulb, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faLink, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trust-quadri',
  templateUrl: './trust-quadri.component.html',
  styleUrls: ['./trust-quadri.component.scss']
})
export class TrustQuadriComponent implements OnInit {

  lightbulb = faLightbulb;
  check = faCheckCircle;
  link = faLink;
  hands = faHandsHelping;

  constructor() { }

  ngOnInit() {
  }

}
