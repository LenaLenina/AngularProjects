import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';


const routes: Routes = [
  { path: "", 
    component: ProductsListComponent,
    children: [
      { path: ":id", component: ProductsDetailsComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
