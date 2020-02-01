import { Component, OnInit } from '@angular/core';
import '../../../assets/js/slick.min.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      autoplaySpeed: 2000
    });
  }

}
