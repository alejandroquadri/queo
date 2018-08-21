import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { componentFactoryName } from '../../../../node_modules/@angular/compiler';
import { StaticService } from '../../shared';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  id: any;
  application: any;
  products: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staticData: StaticService
  ) { }

  ngOnInit() {
    // lo de abajo es para poder tomar el id de la requestAnimationFrame, sin salir del componentFactoryName.
    // Esto es en caso que la app lo permitiera
    // this.application = this.route.paramMap
    // .pipe(
    //   switchMap(((params: ParamMap) => params.get('id')))
    // )
    // this.application
    // .subscribe( id => {
    //   console.log(id);
    // });

    // esto de abajo es mucho mas simple. Pregunta una sola vez cuando se entra en el componente
    this.id = this.whichApp(this.route.snapshot.paramMap.getAll('id')[0]);
    this.application = this.staticData.data.apps[this.id];
    this.products = this.staticData.data.products;
  }

  routeTo(prod) {
    this.router.navigate([`/productos/${prod}`]);
  }

  whichApp(route): String {
    let app;
    switch (route) {
      case 'pisos-exteriores':
        app = 'pisosExt';
        break;

      case 'pisos-interiores':
        app = 'pisosInt';
        break;

      default:
        app = route;
        break;
    }
    return app;
  }

}
