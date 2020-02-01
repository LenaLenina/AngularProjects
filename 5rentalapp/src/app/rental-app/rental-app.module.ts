import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalAppComponent } from './rental-app.component';



@NgModule({
  declarations: [RentalAppComponent],
  imports: [
    CommonModule
  ],
  exports: [RentalAppComponent]
})
export class RentalAppModule { }
