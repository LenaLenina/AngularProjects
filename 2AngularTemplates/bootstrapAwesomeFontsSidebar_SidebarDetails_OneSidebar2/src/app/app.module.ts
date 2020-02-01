import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  HomeComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  MainpageComponent,
  PageNotFoundComponent
} from './common/components/index';

import { Services } from './common/constants/services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainpageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ Services ],
  bootstrap: [AppComponent]
})
export class AppModule { }
