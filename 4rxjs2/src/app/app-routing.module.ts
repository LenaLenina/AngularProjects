import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  RxjsHomeComponent,
  RxjsComponent,
  RxjsCreateComponent,
  RxjsCreate2Component
} from './rxjscommon/index';

import { APP_ROUTES } from './common/constants/routes/app_routes';

const routes: Routes = [
  {
    path: '',
    component: RxjsHomeComponent,
    children: [
      { path: APP_ROUTES.rxjs.url, component: RxjsComponent },
      { path: APP_ROUTES.rxjs2.url, component: RxjsCreateComponent },
      { path: APP_ROUTES.rxjs3.url, component: RxjsCreate2Component }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }