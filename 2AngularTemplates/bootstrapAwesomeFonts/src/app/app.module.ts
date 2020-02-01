import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Services } from './common/services/services';
import { HomeComponent } from './common/components/home/home.component';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProductsModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
