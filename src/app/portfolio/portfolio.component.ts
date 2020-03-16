import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  delhiImages = [
    { image: 'assets/img/hike/portfolio/biryani_blues.jpg', link: 'https://www.facebook.com/biryaniblues1/'},
    { image: 'assets/img/hike/portfolio/bronx.jpeg', link: 'https://www.facebook.com/Eggersmadhouse/'},
    { image: 'assets/img/hike/portfolio/eggers-house.jpeg', link: 'https://www.facebook.com/Eggersmadhouse/'},
    { image: 'assets/img/hike/portfolio/insta-pizza.png', link: 'https://www.facebook.com/instapizza/'},
    { image: 'assets/img/hike/portfolio/khaaja-chowk.png', link: 'https://www.facebook.com/KhaajaChowkPlazaMallGurgaon/'},
    { image: 'assets/img/hike/portfolio/tossin-piza.jpg', link: 'https://www.facebook.com/tossin.pizza/'},
  ]

  bengaluruImages = [
    { image: 'assets/img/hike/portfolio/frozen-bottle.jpg', link: 'https://www.facebook.com/FrozenBottle/'},
    { image: 'assets/img/hike/portfolio/cream-stone.jpg', link: 'https://www.facebook.com/creamstoneconcepts/'},
    { image: 'assets/img/hike/portfolio/biggies.jpg', link: 'https://www.facebook.com/XObelgianwaffle/'},
    { image: 'assets/img/hike/portfolio/gillies.jpg', link: 'https://www.facebook.com/Gillys-Resto-Bar-Marathahalli-Main-Road-378465452510742/'},
    { image: 'assets/img/hike/portfolio/thecircus.jpg', link: 'https://www.facebook.com/thecirkushsr/'},
    { image: 'assets/img/hike/portfolio/brooks.jpg', link: 'https://www.facebook.com/BrooksandBonds/'},
  ]

  mumbaiImages = [
    { image: 'assets/img/hike/portfolio/bhk.jpg', link: 'https://www.facebook.com/1brewhousekitchen/'},
    { image: 'assets/img/hike/portfolio/un.jpg', link: 'https://www.facebook.com/urbannashta/'},
    { image: 'assets/img/hike/portfolio/bugosa.jpg', link: 'https://www.facebook.com/mealsinabowl/'},
    { image: 'assets/img/hike/portfolio/oozo.jpg', link: 'https://www.facebook.com/OozoBarAndDiner/'},
    { image: 'assets/img/hike/portfolio/moom.jpg', link: 'https://www.facebook.com/NomNomBandra/'},
    { image: 'assets/img/hike/portfolio/quence.jpg', link: 'https://www.facebook.com/QuenchJuhu/'},
  ]

  dubaiImages = [
    { image: 'assets/img/hike/portfolio/cypher.jpg', link: 'https://www.facebook.com/cyph3rsec/'},
    { image: 'assets/img/hike/portfolio/concon.jpg', link: 'https://www.facebook.com/Concon-Cafe-554409281588600/'},
    { image: 'assets/img/hike/portfolio/duget.jpg', link: '#'}
  ]

  abudhabiImages = [
    { image: 'assets/img/hike/portfolio/andiamo.jpg', link: '#'},
    { image: 'assets/img/hike/portfolio/expression.jpg', link: 'https://www.facebook.com/lavazza.ad/'},
    { image: 'assets/img/hike/portfolio/hwy.jpg', link: 'https://www.facebook.com/hwy55abudhabi/'}
  ]
}
