import { Component, OnInit } from '@angular/core';
import { StaticService } from '../shared';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectData: any;
  projectArray: Array<any>;

  constructor(
    private staticData: StaticService
  ) { }

  ngOnInit() {
    this.projectData = this.staticData.data.inspiration;
    this.projectArray = Object.keys(this.projectData.projects);
  }

}
