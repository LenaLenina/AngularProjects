import { Component, OnInit } from '@angular/core';
import { SidebarItemsManager } from '../../common/services/index';
import { SidebarItem } from '../../common/models/index';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  sidebarItems: SidebarItem[] = [
    new SidebarItem("Home", "/home"),
    new SidebarItem("Admin Products", "/admin/products"),
    new SidebarItem("Admin Users", "/admin/users")
  ];

  constructor(private sidebarItemsManager: SidebarItemsManager) { }

  ngOnInit() {
    this.sidebarItemsManager.announceSidebarItems(this.sidebarItems);
  }

}
