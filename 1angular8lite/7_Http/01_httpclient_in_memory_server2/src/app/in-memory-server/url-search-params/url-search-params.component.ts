import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'lns-url-search-params',
  templateUrl: './url-search-params.component.html',
  styleUrls: ['./url-search-params.component.css']
})
export class UrlSearchParamsComponent implements OnInit {

  private url = 'app/items';  // URL to web api

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  clickHandler() {
    // We don't need any more these lines
    // let params1: HttpParams = new HttpParams();
    // params1.set("a", "1");
    // params1.set("b", "value");

    const options = { params: new HttpParams().set('a', "1").set("b", "value") };

    // метод get с параметром search будет выполнять запрос по следующему адресу
    // http://localhost:4200/app/items?a=1&b=value
    // Для того чтобы увидеть запрос в браузере закомментируйте настройку in memory web api в app.module.ts 

    this.http.get(this.url, options).subscribe(
      response => console.log("success"),
      error => console.log("error")
    )
  }
}