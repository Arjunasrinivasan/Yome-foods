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
                  id: '0', toogle: false, name: 'Online Markerting', link: '/online-marketing', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Blogging', link: '/blogging', subsubmenus: '' },
                      { id: '1', toggle: false, name: 'Logo Designing', link: '/logo-designing', subsubmenus: '' },
                      { id: '2', toggle: false, name: 'Content Marketing', link: '/content-marketing', subsubmenus: '' },
                      { id: '3', toggle: false, name: 'Bookmarking', link: '/bookmarking', subsubmenus: '' },
                      { id: '4', toggle: false, name: 'Video marketing', link: '/video-marketing' },
                      { id: '4', toggle: false, name: 'Website creation', link: '/website-creation' },
                    ]
                },
                {
                  id: '1', toggle: false, name: 'Social Media Marketing', link: '/social-media-marketing', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Instagram', link: '/instagram' },
                      { id: '1', toggle: false, name: 'Facebook', link: '/facebook' },
                      { id: '2', toggle: false, name: 'Twitter', link: '/twitter' },
                      { id: '3', toggle: false, name: 'Youtube', link: '/youtube' },
                      { id: '4', toggle: false, name: 'Linkedin', link: '/linkedin' },
                      { id: '5', toggle: false, name: 'Pinterest', link: '/pinterest' },
                    ]
                },
                {
                  id: '2', toggle: false, name: 'Offline Marketing', link: '/offline-marketing', subsubmenus: [
                    { id: '0', toggle: false, name: 'Visiting Cards', link: '/visiting-cards' },
                    { id: '1', toggle: false, name: 'Banners', link: '/banners' },
                    { id: '2', toggle: false, name: 'Flyers', link: '/flyers' },
                    { id: '3', toggle: false, name: 'Hoardings', link: '/hoardings' },
                    { id: '4', toggle: false, name: 'Promotional Cards', link: '/promotional-cards' },
                    { id: '5', toggle: false, name: 'Promotional Events', link: '/promotional-events' },
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
