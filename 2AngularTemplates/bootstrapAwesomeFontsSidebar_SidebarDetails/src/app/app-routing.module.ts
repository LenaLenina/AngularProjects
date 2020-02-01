import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { MainpageComponent } from './common/components/mainpage/mainpage.component';


const routes: Routes = [
  {
    path: "home",
    component: MainpageComponent,
    children:[
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
  {
    path: "admin",
    component: MainpageComponent,
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: "products",
    component: MainpageComponent,
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
  },
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
