import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private url = "http://localhost:5000/products";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    let products = this.http.get(this.url)
      .pipe(
        map(this.extractProducts),
        catchError(this.handleError));

    return products;
  }

  public getProduct(id: string): Observable<Product> {
    let product = this.http.get(this.url + "/" + id)
      .pipe(
        map(this.extractProduct),
        catchError(this.handleError));

    return product;
  }

  public addProduct(product: Product) {
    return this.http.post(this.url, product).pipe(catchError(this.handleError));
  }

  public updateProduct(product: Product) {
    return this.http.put(this.url + "/" + product.id, product).pipe(catchError(this.handleError));
  }

  public deleteProduct(product: Product) {
    return this.http.delete(this.url + "/" + product.id).pipe(catchError(this.handleError))
  }

  private extractProducts(response) {
    let products: Product[] = [];

    for (let i = 0; i < response.length; i++) {
      products.push(new Product(response[i].id, response[i].name, response[i].price));
    }

    return products;
  }

  private extractProduct(response) {
    return new Product(response.id, response.name, response.price);;
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error) {
      let errorData = JSON.stringify(error);

      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return throwError(new Error(message));
  }
}
