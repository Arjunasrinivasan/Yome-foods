import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  private wowSubscription: Subscription;
  location: any;

  constructor(
    private router: Router, 
    location: Location, 
    private wowService: NgwWowService
    ){
    this.wowService.init(); 
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) { 
        $('.preloader').fadeIn();
      }
      if (ev instanceof NavigationEnd) { 
        this.location = location.path();
        $('.preloader').fadeOut('slow');
      }
    });
  }

  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // 
      });

    // Preloader
    $(window).on('load', function() {
      $('.preloader').fadeOut();
    });
  }

  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }
}
