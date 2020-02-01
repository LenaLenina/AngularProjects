import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsCreateComponent } from './rxjs-create/rxjs-create.component';
import { RxjsCreate2Component } from './rxjs-create2/rxjs-create2.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    RxjsCreateComponent,
    RxjsCreate2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
