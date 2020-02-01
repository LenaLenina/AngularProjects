import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeklikComponent } from './homeklik.component';
import { HeaderModule } from '../header/header.module';
import { SliderModule } from '../slider/slider.module';


@NgModule({
  declarations: [HomeklikComponent],
  imports: [
    CommonModule, HeaderModule, SliderModule
  ],
  exports: [HomeklikComponent]
})
export class HomeklikModule { }
