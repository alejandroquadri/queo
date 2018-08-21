import { Component, OnInit, Input } from '@angular/core';
import { StaticService } from '../../services';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  apps: any;

  @Input() applications: Array<String>;

  constructor(
    public staticData: StaticService
  ) { }

  ngOnInit() {
    this.apps = this.staticData.data.apps;
  }

  detWidth(app): String {
    let klass;
    switch (app) {

        case 'revestimientos':
        klass = 'h-app-img';
          break;

      default:
      klass = 'w-app-img';
        break;
    }
    return klass;
  }

}
