import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-create2',
  templateUrl: './rxjs-create2.component.html',
  styleUrls: ['./rxjs-create2.component.css']
})
export class RxjsCreate2Component implements OnInit, AfterViewInit {

  result: string = "";

  input: HTMLElement;

  @ViewChild("btn2", { static: false }) createBtn: ElementRef;

  constructor() { }

  ngOnInit() {
    this.btn3Settings();
  }

  ngAfterViewInit(): void {
    this.btn2Settings();
  }

  private btn2Settings(){
    let stream: Observable<any> = fromEvent(this.createBtn.nativeElement, "click");
    stream.subscribe(x => this.result += "1");
  }

  private btn3Settings(){
    this.input = document.getElementById("btn3");
    this.subscribeOnClickBtn2();
  }

  private subscribeOnClickBtn2(){
    fromEvent(this.input, "click").subscribe(() => this.result += "2");
  }

}
