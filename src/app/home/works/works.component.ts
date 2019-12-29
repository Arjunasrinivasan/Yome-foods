import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  workCarousel: OwlOptions = {
    loop:true,
		nav:false,
		autoplay: true,
		dots:false,
		responsive:{
			0:{
        items:1,
      },
      768:{
        items:2,
      },
      1200:{
        items:3,
      },
      1500:{
        items:4,
			}
		}
  }

}
