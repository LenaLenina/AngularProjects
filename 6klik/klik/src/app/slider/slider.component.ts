import { Component, OnInit } from '@angular/core';
import '../../assets/js/slick.min.js';
import * as $ from 'jquery';

/*

For using slick you should:
- add in package.json "jquery": "^1.11.3",
- npm install jquery --save // for jquery.d.ts - definition file
- into folder assets/js add  slick.min.js and slick.d.ts files
- in angular.json file add into items styles and scripts:
"styles": [
  "src/assets/css/slick.css",
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js", // important that jquery must stay before slick.min.js because for work slick needed jquery
  "src/assets/js/slick.min.js"
]

- import these into target name.component.ts (where slick work in name.component.html):
import '../../assets/js/slick.min.js';
import * as $ from 'jquery';

- decalre method in target name.component.ts:
startSlider() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500
  });
}

- call this method in target name.component.ts:
ngOnInit() {
  this.startSlider();
}

- in style.css add styles:
.slider .slick-dots{
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top:40%;
    right: 10%;
}

.slick-dots li{
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    display: block;
}

.slick-dots li button{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color:#fff;
    display: block;
    border: none;
    text-indent: -9999px;
}

.slick-dots li.slick-active button{
    background-color:#007dc3;
}

- also remember that slick wrong work with 3 and 6 elements, but normal work with 4,2,5,7,8,9,10 elements

*/

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      fade: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000
    });
  }
}