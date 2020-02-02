import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, from, of, interval, fromEvent } from 'rxjs';
import { filter, debounceTime, delay, last, first, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-create',
  templateUrl: './rxjs-create.component.html',
  styleUrls: ['./rxjs-create.component.css']
})
export class RxjsCreateComponent implements AfterViewInit {
  

  result: string = "";
  stream: Observable<any>;
  @ViewChild("btn2", {static: false}) createBtn: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.stream = fromEvent(this.createBtn.nativeElement, "click");

    this.stream.subscribe(x=>this.result += "1");
  }

  create() {
    console.clear();
    this.create8();
  }

  create1() {
    let o = from([1, 2, 3, 4, 5]);

    let s = o.pipe(filter(x => x % 2 == 0));

    s.subscribe(x => console.log(x));
  }

  create2() {
    let o = from([1, 2, 3, 4, 5]);

    let s: Observable<number>;

    s = o.pipe(delay(1000), filter(x => x % 2 == 0), last());

    s.subscribe(x => console.log(x));
  }

  create3() {
    from(["1", "2", 3, 4, 5])
      .pipe(delay(1000), filter(x => {
        if (typeof x === "number") {
          return x % 2 == 0;
        }
        else {
          return true;
        }
      }), delay(500))
      .subscribe(x => console.log(x));
  }

  create4() {
    let o = of([1, 2, 3, 4, 5]);

    o.subscribe(y => from(y)
      .pipe(
        delay(500),
        filter(x => x % 2 == 0))
      .subscribe(x => {
        console.log(x);
      }));
  }

  create5() {

    let o = interval(500)

    let s = o.subscribe(vl => {
      if (vl < 5)
        console.log(vl)
      else
        s.unsubscribe();
    });
  }

  create6() {
    // let o = from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // let o2 = o.pipe(filter(x=>x%2 == 0), map(x=> x + "."));

    // o2.subscribe(x=> console.log(x));

    from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
      .pipe(filter(x => x % 2 == 0), map(x => x + "."))
      .subscribe(x => console.log(x));
  }

  create7() {
    // let o = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

    // let o2 = o.pipe(filter(x=>x%2 == 0), map(x=> x + "."));

    // o2.subscribe(x=> console.log(x));

    of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(filter(x => x % 2 == 0), map(x => x + "."))
      .subscribe(x => console.log(x));
  }

  create8() {
    // let o = interval(100);

    // let o2 = o.pipe(take(20), filter(x => x % 2 == 0), map(x => x + "."));

    // o2.subscribe(x => console.log(x));

    interval(100)
      .pipe(take(20), filter(x => x % 2 == 0), map(x => x + "."))
      .subscribe(x => console.log(x));
  }
}