import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'lns-request-options',
  templateUrl: './request-options.component.html',
  styleUrls: ['./request-options.component.css']
})
export class RequestOptionsComponent implements OnInit {

  private url = 'api/items';  // URL to web api
  id: number;
  name: string;
  itemArray: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.url).subscribe(
      result => this.itemArray = result,
      error => console.log(error.statusText)
    )
  }

  clickHandler() {
    // создание опций для запроса
    let httpOptions = {
      // определение пользовательских заголовков
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "X-MyHeader": "Hello world"
      })
    };

    // создание объекта для отправки на сервер
    let data = {
      id: this.id,
      name: this.name
    }

    // post запроса с указанием адреса, данных и опций
    // для того чтобы увидеть данные запроса в Developer Tools во вкладке Network 
    // закомментируйте строку импорта и настройки модуля InMemoryWebApiModule в root module (app.module.ts)
    this.http.post(this.url, data, httpOptions).subscribe(
      result => {
        if (result)
          this.itemArray.push(result);
      },
      error => console.log(error)
    );

  }

}
