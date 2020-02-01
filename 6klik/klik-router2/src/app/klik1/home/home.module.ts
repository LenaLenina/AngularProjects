import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '../header/header.module';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule, HeaderModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }