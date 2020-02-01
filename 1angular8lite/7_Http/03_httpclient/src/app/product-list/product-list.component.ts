import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  errorMessage: string;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  public refresh() {
    this.getProducts();
  }

  public editProduct(product: Product) {
    this.router.navigate(["products", "edit", product.id]);
  }

  public deleteProduct(product: Product) {
    this.router.navigate(["products", "delete", product.id]);
  }

  public createProduct() {
    this.router.navigate(["products", "create"]);
  }

  private getProducts() {
    this.service.getProducts().subscribe(
      data => this.products = data,
      error => this.errorMessage = error);
  }
}