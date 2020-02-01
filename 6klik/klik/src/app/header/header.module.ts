import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    ContactsComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent,
    ContactsComponent,
    NavigationComponent
  ]
})
export class HeaderModule { }
