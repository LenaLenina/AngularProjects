import { Component, OnInit } from '@angular/core';
import { NAVIGATIONBANAMES } from '../../model/navigationbar';
import { NavigationBarObj } from 'src/app/klik1/model/NavigationBarObj';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationBarNames: NavigationBarObj[] = NAVIGATIONBANAMES;

  constructor() { }

  ngOnInit() {
  }

  get navigationBarNamesPart1() {
    return this.navigationBarNames.slice(0, 3);
  }

  get navigationBarNamesPart2() {
    return this.navigationBarNames.slice(3);
  }

}