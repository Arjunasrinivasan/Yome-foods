import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];

  imagesSlider = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    fade: true,
    autoplay: true,
    draggable: true,
    prevArrow: '.client-feedback .prev-arrow',
    nextArrow: '.client-feedback .next-arrow',
    asNavFor: ".thumbs",
  };
  thumbnailsSlider = {
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    draggable: false,
    focusOnSelect: true,
    asNavFor: ".feedback",
    prevArrow: '.client-thumbnails .prev-arrow',
    nextArrow: '.client-thumbnails .next-arrow',
  };

}
