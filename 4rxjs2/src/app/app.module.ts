import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RXJS_COMPONENTS } from './common/constants/rxjs_components';

@NgModule({
  declarations: [
    AppComponent,
    ...RXJS_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
