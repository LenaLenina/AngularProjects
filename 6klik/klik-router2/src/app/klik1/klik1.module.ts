import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Klik1RoutingModule } from './klik1-routing.module';

import { HomeModule } from './home/home.module';
import { HomeklikModule } from './homeklik/homeklik.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    Klik1RoutingModule,
    
    HomeModule,
    HomeklikModule,
    UsersModule
  ]
})
export class Klik1Module { }