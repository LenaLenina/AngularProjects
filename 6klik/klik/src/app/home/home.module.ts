import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule, HeaderModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
