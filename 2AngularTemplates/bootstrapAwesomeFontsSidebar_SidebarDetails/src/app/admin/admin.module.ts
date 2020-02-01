import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


@NgModule({
  declarations: [AdminHomeComponent, AdminProductsComponent, AdminUsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
