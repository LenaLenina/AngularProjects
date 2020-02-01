import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lns-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  id: number;
  name: string;
  itemArray: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>("app/items").subscribe(
      result => this.itemArray = result,
      error => console.log(error.statusText)
    )
  }

  clickHandler(){
    this.http.post<any>("app/items", {id: this.id, name: this.name}).subscribe(
      result => {
        if(result) this.itemArray.push(result);
      },
      error => console.log(error.statusText)
    );
  }
}