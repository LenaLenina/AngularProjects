import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  users: User[];

  constructor(private productsService: ProductsService, private userService: UserService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.users = this.userService.getUsers();
  }

}