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
                { id: '0', toggle: false, name: 'Software as a Service (SAAS)', link: '/saas', subsubmenus: '' },
                {
                  id: '1', toggle: false, name: 'Design And Development', link: '/blockchain', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Blockchain', link: '/blockchain' },
                      { id: '1', toggle: false, name: 'E-Commerce', link: '/ecommerce' },
                      { id: '2', toggle: false, name: 'ERP Software Development', link: '/erp' },
                      { id: '3', toggle: false, name: 'Internet of Things', link: '/iot' },
                      { id: '4', toggle: false, name: 'Mobile Application Development', link: '/app' },
                      { id: '5', toggle: false, name: 'UI', link: '/ui' },
                      { id: '6', toggle: false, name: 'API Creation and Integration', link: '/api' }
                    ]
                },
                {
                  id: '2', toggle: false, name: 'Cloud Services', link: '/infrastructure-solution', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Infrastructure Solution', link: '/infrastructure-solution' },
                      { id: '1', toggle: false, name: 'Cyber Security', link: '/cyber-security' }
                    ]
                },
                {
                  id: '3', toggle: false, name: 'Application And Cloud Services', link: '/it-maintenance', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'IT Maintenance', link: '/it-maintenance' },
                    ]
                },
                {
                  id: '4', toggle: false, name: 'Analytics', link: '/analytics', subsubmenus:
                    [
                      { id: '0', toggle: false, name: 'Analytics & Insights', link: '/analytics' },
                      { id: '1', toggle: false, name: 'Artificial Intelligence', link: '/ai' }
                    ]
                },
                { id: '5', toggle: false, name: 'Content Management System', link: '/cms', subsubmenus: '' },
                { id: '6', toggle: false, name: 'Customer Relationship Management', link: '/crm', subsubmenus: '' },
                { id: '7', toggle: false, name: 'Customisable Software', link: '/customisable-software', subsubmenus: '' },
                { id: '8', toggle: false, name: 'Digital Marketing', link: '/digital-marketing', subsubmenus: '' },
                { id: '9', toggle: false, name: 'Offline Marketing', link: '/offline-marketing', subsubmenus: '' }

              ]
          },
          { id: '2', toggle: false, name: 'Portfolio', link: '/portfolio', submenus: '' },
          { id: '3', toggle: false, name: 'About Us', link: '/about', submenus: '' },
          { id: '4', toggle: false, name: 'Contact Us', link: '/contact', submenus: '' }
        ];

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
