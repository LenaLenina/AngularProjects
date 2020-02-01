import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { UserService } from '../../services/users.service';
import { SidebarItem } from '../../models/sidebarItem';
import { SidebarItemsManager } from '../../services/sidebarItemsManager';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  users: User[];

  sidebarItems: SidebarItem[] = [
    new SidebarItem("Home", "/home"),
    new SidebarItem("Admin", "/admin"),
    new SidebarItem("Products", "/products")
  ];

  constructor(
    private productsService: ProductsService, 
    private userService: UserService,
    private sidebarItemsManager: SidebarItemsManager
    ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.users = this.userService.getUsers();
    this.sidebarItemsManager.announceSidebarItems(this.sidebarItems);
  }
}