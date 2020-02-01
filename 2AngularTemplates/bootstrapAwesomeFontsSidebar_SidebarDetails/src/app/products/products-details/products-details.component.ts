import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Product } from 'src/app/common/models/product';
import { ProductsService } from 'src/app/common/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product: Product;

  // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductsService) { }

  ngOnInit() {
    // params - параметры текущего маршрута. Данное свойство является Observable объектом
    // Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.

    // forEach - устанавливаем обработчик на каждое изменение params
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"]; // конвертируем значение параметра id в тип number
      this.product = this.service.getProduct(id);  // обращаемся к сервису и запрашиваем фразу по id. 
    });
  }
}