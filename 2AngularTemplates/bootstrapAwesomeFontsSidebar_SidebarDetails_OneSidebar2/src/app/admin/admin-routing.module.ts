import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


const routes: Routes = [
  { path: "",
   component: AdminHomeComponent,
    children: [
      { path: "products", component: AdminProductsComponent },
      { path: "users", component: AdminUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
