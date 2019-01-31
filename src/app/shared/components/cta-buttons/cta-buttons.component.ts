import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StaticService } from '../../services';

@Component({
  selector: 'app-cta-buttons',
  templateUrl: './cta-buttons.component.html',
  styleUrls: ['./cta-buttons.component.scss']
})
export class CtaButtonsComponent implements OnInit {

  data: any;
  public lightTheme = true;
  @Output() prim = new EventEmitter();
  @Output() sec = new EventEmitter();
  @Output() ter = new EventEmitter();
  @Input() primary: boolean;
  @Input() secondary: boolean;
  @Input() terciary: boolean;
  @Input() pText: string;
  @Input() sText: string;
  @Input() tText: string;
  @Input() changeTheme: boolean;
  @Input() interest: string;
  @Input() buttonsStart: boolean;
  @Input() vertical = false;
  @Input() pId: string;
  @Input() sId: string;
  @Input() tId: string;


  constructor(
    private statisData: StaticService,
  ) { }

  ngOnInit() {
    this.data = this.statisData.data.components.cta;
    if ( this.changeTheme) { this.lightTheme = !this.lightTheme; }
  }

  getPim() {
    this.prim.emit(true);
  }

  getSec() {
    this.sec.emit(true);
  }

  getTer() {
    this.ter.emit(true);
  }

}
