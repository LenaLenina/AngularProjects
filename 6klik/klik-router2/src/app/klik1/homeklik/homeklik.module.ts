import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../header/header.module';
import { SliderModule } from '../slider/slider.module';

import { HomeklikComponent } from './homeklik.component';


@NgModule({
  declarations: [HomeklikComponent],
  imports: [
    CommonModule, HeaderModule, SliderModule
  ],
  exports: [HomeklikComponent]
})
export class HomeklikModule { }
