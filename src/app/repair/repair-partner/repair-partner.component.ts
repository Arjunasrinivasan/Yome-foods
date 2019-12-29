import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-repair-partner',
  templateUrl: './repair-partner.component.html',
  styleUrls: ['./repair-partner.component.css']
})
export class RepairPartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  repairCarousel: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
      0:{
        items:4,
      },
      768:{
        items:6,
      },
      1200:{
        items:6,
      }
    }
  }

}
