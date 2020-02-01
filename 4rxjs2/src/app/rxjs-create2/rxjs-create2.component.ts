import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-create2',
  templateUrl: './rxjs-create2.component.html',
  styleUrls: ['./rxjs-create2.component.css']
})
export class RxjsCreate2Component implements OnInit {

  result: string = "";

  input: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.input = document.getElementById("btn3");
    this.subscribeOnClickBtn2();
  }

  subscribeOnClickBtn2(){
    fromEvent(this.input, "click").subscribe(() => this.result += "1");
  }

}
