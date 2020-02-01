import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RentalAppModule } from './rental-app/rental-app.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, RentalAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
