import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-team-home',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.css']
})
export class HomeTeamComponent implements OnInit {
  brandName = environment.BrandName;
  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
      1500: {
        items: 5,
      }
    }
  }

}
