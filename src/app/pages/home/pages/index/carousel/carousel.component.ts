import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  file = [
    {
      image: 'assets/images/banner-00.jpg'
    },
    {
      image: 'assets/images/banner-01.jpg'
    },
    {
      image: 'assets/images/banner-02.jpg'
    },
    {
      image: 'assets/images/banner-03.jpg'
    },
    {
      image: 'assets/images/banner-04.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
