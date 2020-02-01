import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Klik1Module } from './klik1/klik1.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/homeklik', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, PageNotFoundComponent, Klik1Module]
})
export class AppRoutingModule { }