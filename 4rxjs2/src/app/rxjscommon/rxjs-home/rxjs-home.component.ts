import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from '../../common/constants/routes/app_routes';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css']
})
export class RxjsHomeComponent implements OnInit {

  sidebarItems;

  constructor() { }

  ngOnInit() {
    this.sidebarItems = [
      { name: APP_ROUTES.rxjs.name, url: '/' + APP_ROUTES.rxjs.url },
      { name: APP_ROUTES.rxjs2.name, url: '/' + APP_ROUTES.rxjs2.url },
      { name: APP_ROUTES.rxjs3.name, url: '/' + APP_ROUTES.rxjs3.url }
    ]
  }

}
