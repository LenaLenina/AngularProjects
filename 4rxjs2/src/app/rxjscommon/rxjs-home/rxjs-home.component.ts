import { Component, OnInit } from '@angular/core';
import { APP_ROUTES_TO_SIDEBAR } from '../../common/constants/routes/app_routes';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css']
})
export class RxjsHomeComponent implements OnInit {

  sidebarItems = APP_ROUTES_TO_SIDEBAR;

  constructor() { }

  ngOnInit() {

  }

}
