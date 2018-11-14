import { Component, OnInit } from '@angular/core';
import { StaticService, SeoService } from '../shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any;

  constructor(
    private staticData: StaticService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.data = this.staticData.data.about;

    const metaTags = {
      title: `Contacto | Queo`,
      // tslint:disable-next-line:max-line-length
      description: `Telefono: +54 11 4861 0450. Gascon 483, Ciudad autonoma de Buenos Aires. info@queo.com.ar`,
      image: this.data.featured,
      slug: 'nosotros',
    };

    this.seoService.generateTags(metaTags);
  }

}
