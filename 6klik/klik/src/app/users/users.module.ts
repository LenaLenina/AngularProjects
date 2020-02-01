import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule, RouterModule, HeaderModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
