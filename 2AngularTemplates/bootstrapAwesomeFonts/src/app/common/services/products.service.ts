import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

  products: Product[] = [
    new Product(1, "apple", 10),
    new Product(2, "apple2", 20),
    new Product(3, "apple3", 30),
    new Product(4, "apple4", 40)
  ];

  constructor() { }

  getProducts(){
    return this.products;
  }
}
