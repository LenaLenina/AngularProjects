import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(_ =>{
      console.clear();
      this.observable4();
    }, 500);
    
  }

  observable(){

    let o = new Observable((observer) => {
      setTimeout(_ => {
        observer.next("hi");
      }, 1000);
    });


    let s = o.subscribe(
      {
        next: (val) => console.log(val)
      }
    )

    let a = 10 + 10;
    console.log(a);

    let s2 = o.subscribe(
      {
        next: (val) => console.log(val)
      }
    )

    let s3 = o.subscribe(
      {
        next: (val) => console.log(val)
      }
    )

  }

  observable2(){

    console.log(this.calc());

    let a = 10 + 10;
    console.log(a);

    console.log(this.calc());

    console.log(this.calc());

  }

  calc() {
    setTimeout(_ => {
      return "hi";
    }, 1000);
  }

  observable3(){

    this.calc2();

    this.calc2();

    this.calc2();

    let a = 10 + 10;
    console.log(a);
  }

  calc2() {
    setTimeout(_ => {
      console.log("hi") ;
    }, 1000);
  }

  observable4(){

    this.calc4().subscribe({
      next: (val) => {
        setTimeout(_ => { 
          console.log(val + new Date().getSeconds().toString())
        },2000);
      } 
    });

    let a = 10 + 10;
    console.log(a);

    this.calc4().subscribe({
      next: (val) => console.log(val + new Date().getSeconds().toString())
    });

    this.calc4().subscribe({
      next: (val) => console.log(val + new Date().getSeconds().toString())
    });

  }

  calc4(): Observable<any> {
    let o = new Observable(o2 => {
      setTimeout(_ => {

        let str = "h";

        setTimeout(_ =>{
          str += "i";

          str += "2";

          o2.next(str + " ");
        }, 1000);

      }, 1000);
    });
    
    return o;
  }
}
