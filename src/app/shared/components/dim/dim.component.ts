import { Component, OnInit, Input } from '@angular/core';
import { StaticService } from '../../services';

@Component({
  selector: 'app-dim',
  templateUrl: './dim.component.html',
  styleUrls: ['./dim.component.scss']
})
export class DimComponent implements OnInit {

  dims: any;

  @Input() dim: Array<any>;
  @Input() thikness: String;

  constructor(
    public staticData: StaticService
  ) { }

  ngOnInit() {
    this.dims = this.staticData.data.dim;
  }

}
