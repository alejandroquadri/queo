import { Component, OnInit } from '@angular/core';
import { StaticService } from '../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-bespoke',
  templateUrl: './bespoke.component.html',
  styleUrls: ['./bespoke.component.scss']
})
export class BespokeComponent implements OnInit {

  data: any;

  constructor(
    private staticData: StaticService,
    private modalService: NgbModal,

  ) {
    this.data = this.staticData.data.components.bespoke;
  }

  ngOnInit() {
  }

  contact() {
    const modalRef = this.modalService.open(QueryComponent, {size: 'lg', centered: true});
    modalRef.componentInstance.data = JSON.stringify('Agendar reunion');
  }

}
