import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './common/constants/app.route';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ItemData } from './common/sever/inMemoryServer';
import { InMemoryServerModule } from './in-memory-server/in-memory-server.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(ItemData),
    InMemoryServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
