import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './wiki/wiki.service';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
