import { Component, OnInit, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)])
      ]
    )
  ],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})

export class HeaderComponent implements OnInit {
  public navbarOpen = false;
  public servicesOpen = false;
  public clicked = false;
  menus: {};
  _el: any;
  location: any;
  layoutClass: string;

  toggleNavbar = () => {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleServices = (id) => {
    this.menus[id].toggle = !this.menus[id].toggle;
  }
  toggleSubServices = (id, subid) => {
    this.menus[id].submenus[subid].toggle = !this.menus[id].submenus[subid].toggle;
  }

  constructor(
    private router: Router,
    location: Location,
    @Inject(DOCUMENT) document
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.location = location.path();
        if (this.location == '/web-hosting') {
          this.layoutClass = 'p-relative';
        } else {
          this.layoutClass = '';
        }

        this.menus = [
          { id: '0', toggle: false, name: 'Home', link: '/home', submenus: '' },
          {
            id: '1', toggle: false, name: 'Services', link: '/services', submenus:
              [
                {
                  id: '0', toggle: false, name: 'Direct Marketing', link: '/direct-marketing', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                     
                    ]
                },
                {
                  id: '1', toggle: false, name: 'Content production', link: '/content-production', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                    
                    ]
                },
               
                {
                  id: '2', toggle: false, name: 'Social Marketing', link: '/offline-marketing', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                      { id: '4', toggle: false, name: 'Linkedin', link: '/linkedin' },
                      { id: '5', toggle: false, name: 'Pinterest', link: '/pinterest' },
                      { id: '6', toggle: false, name: 'Video marketing', link: '/video-marketing' },
                    ]
                },
                {
                  id: '3', toggle: false, name: 'Search Engine Optimization', link: '/SEO', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
            
                    ]
                },
               
                {
                  id: '4', toggle: false, name: 'Mobile Marketing', link: '/mobile-marketing', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                      { id: '4', toggle: false, name: 'Linkedin', link: '/linkedin' },
                      { id: '5', toggle: false, name: 'Pinterest', link: '/pinterest' },
                      { id: '6', toggle: false, name: 'Video marketing', link: '/video-marketing' },
                    ]
                },
                
                
                {
                  id: '5', toogle: false, name: 'Paid Advertising Using AdWords', link: '/Paid-Ad', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Blogging', link: '/blogging', subsubmenus: '' },
                      { id: '1', toggle: false, name: 'Logo Designing', link: '/logo-designing', subsubmenus: '' },
                      { id: '2', toggle: false, name: 'Content Marketing', link: '/content-marketing', subsubmenus: '' },
                      { id: '4', toggle: false, name: 'Bookmarking', link: '/bookmarking', subsubmenus: '' },
                    ]
                },
                {
                  id: '6', toggle: false, name: 'Analytics & Insights', link: '/analytics-insights', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                
                    ]
                },
                {
                  id: '7', toggle: false, name: 'Web and App development', link: '/web-app', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                      { id: '4', toggle: false, name: 'Linkedin', link: '/linkedin' },
                      
                    ]
                },
      
              
                {
                  id: '8', toggle: false, name: 'Design & Branding', link: '/design-branding', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                      { id: '4', toggle: false, name: 'Linkedin', link: '/linkedin' },
                      { id: '5', toggle: false, name: 'Pinterest', link: '/pinterest' },
                      { id: '6', toggle: false, name: 'Video marketing', link: '/video-marketing' },
                    ]
                },
                {
                  id: '9', toggle: false, name: 'Business Consulting', link: '/Business-Consulting', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                      { id: '4', toggle: false, name: 'Linkedin', link: '/linkedin' },
                      { id: '5', toggle: false, name: 'Pinterest', link: '/pinterest' },
                      { id: '6', toggle: false, name: 'Video marketing', link: '/video-marketing' },
                    ]
                },
              ],
          },
          { id: '2', toggle: false, name: 'Portfolio', link: '/portfolio', submenus: '' },
          { id: '3', toggle: false, name: 'About Us', link: '/about', submenus: '' },
          { id: '4', toggle: false, name: 'Contact Us', link: '/contact', submenus: '' }
        ]

        this.navbarOpen = false;

      }
    });
  }

  ngOnInit() {


  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('window:click', ['$event'])
  clickedOutside(e): void {
    if (this.clicked) {
      this._el.nativeElement.querySelector('dropdown-menu').classList.toogle('show')
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('header');
      element.classList.add('is-sticky');
    } else {
      let element = document.getElementById('header');
      element.classList.remove('is-sticky');
    }
  }

}
