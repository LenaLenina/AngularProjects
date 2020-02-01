import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { FooterModule } from './footer/footer.module';
import { SliderModule } from './slider/slider.module';
import { HomeklikModule } from './homeklik/homeklik.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HeaderModule,
    FooterModule,
    HomeModule,
    UsersModule,
    SliderModule,
    AppRoutingModule,
    HomeklikModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
