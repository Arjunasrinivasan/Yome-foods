import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-value-practices',
  templateUrl: './value-practices.component.html',
  styleUrls: ['./value-practices.component.css']
})
export class ValuePracticesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ValuePracticeSlides = [
    {
      name: "code",
      message: "Reflecting Client’s Vision - Renowned for our progressive project management methodology, complemented so well by the very best development practices and project managers in the game today, We encourage a friendly team" +
                "environment along with healthy relations the client-side team to ensure free expression of ideas"
    },
    {
      name: "mail", 
      message: "Our Transparency Policy - We believe that in order to deliver a project on time and strictly within budget, complete access is necessary in terms of communications within the team. This means fully transparent interactions" 
                + "between our expert teams consisting of skilled designers, experienced developers, content strategists, and project managers"
    },
    {
      name: "grid",
      message: "Flexible engagement models - Flexibility in engagement models maintains sky high productivity levels and allows our highly competent tactical"
              + "teams to function even better while taking care with a plethora of software projects real-time for our clients. This is one of the recipes behind our success."
    },
    {
      name: "info", 
      message: "Cost-Effective Development - Sometimes even having a brilliant team unified by the force of a shared mission may not be enough" 
                + "due to monetary restrictions. That is why we take a meticulous approach towards project selection and cost reduction in software testing process to deliver the ideal solution."
    },
    {
      name: "mouse-pointer", 
      message: "Team of Certified Specialists - Delivering premium quality software while also being equally cost-effective has always been our speciality. The reason behind that is our highly skilled team of certified specialist"
                + "developers, testers and project managers who’ve always got our backs."
    },
    {
      name: "bell", 
      message: "Offered Work at Committed Time - We keep time management in check through customized treatment while handling problems for each project. This process ensures sleek output delivery."
    }
    
  ];

  valueOptions: OwlOptions = {
		nav:false,
		autoplay: true,
		dots:true,
		responsive:{
			0:{
        items:1,
        loop:true,
      },
      768:{
        items:3,
        loop:true,
      },
      1200:{
        items:3,
        loop:true,
      },
      1500:{
        items:3,
        loop:true,
			}
		}
  }
}
