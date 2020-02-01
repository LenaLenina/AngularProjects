import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Примеры используют angular-in-memory-web-api
// для того чтобы тестировать приложение обрабатывая http запросы без реального сервера
// Настройка angular-in-memory-web-api происходит в app.module
// Логика серверной стороны находиться в файле inMemoryServer.ts

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {

  itemArray: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clickHandler() {
    // this.http.get - отправка get запроса по указанному адресу
    // метод возвращает объект Observable из библиотеки RxJS
    // с помощью метода subscribe подписываемся на событие
    // событие произойдет после получение ответа от сервера.

    this.http.get<any[]>("app/items").subscribe( // app/items2
      result => this.itemArray = result,
      error => console.log(error.statusText)
    )

    Response
  }

}
