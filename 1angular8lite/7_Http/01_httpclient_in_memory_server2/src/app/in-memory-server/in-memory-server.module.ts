import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { GetRequestComponent } from './get-request/get-request.component';
import { PostDataComponent } from './post-data/post-data.component';
import { RequestOptionsComponent } from './request-options/request-options.component';
import { UrlSearchParamsComponent } from './url-search-params/url-search-params.component';



@NgModule({
  declarations: [GetRequestComponent, PostDataComponent, RequestOptionsComponent, UrlSearchParamsComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class InMemoryServerModule { }
