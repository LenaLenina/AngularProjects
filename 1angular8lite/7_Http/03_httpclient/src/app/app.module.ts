import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { routes } from "./app.routes";

import { ProductCreateEditComponent } from './product-create-edit/product-create-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateEditComponent,
    ProductDeleteComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
