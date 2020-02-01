import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HomeklikComponent } from './homeklik/homeklik.component';


const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "users", component: UsersComponent
  },
  {
    path: "homeklik", component: HomeklikComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Klik1RoutingModule { }
