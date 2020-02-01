import { Component, OnInit } from '@angular/core';
import { SidebarItemsManager } from '../../common/services/index';
import { SidebarItem } from '../../common/models/index';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  sysAdminSidebarItems: SidebarItem[] = [
    new SidebarItem("Home", "/home"),
    new SidebarItem("Products", "/products")
  ];
  
  constructor(private sidebarItemsManager: SidebarItemsManager) { }

  ngOnInit() {
    this.sidebarItemsManager.announceSidebarItems(this.sysAdminSidebarItems);
  }

}
