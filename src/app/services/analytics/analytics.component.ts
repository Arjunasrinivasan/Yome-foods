import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // FAQ Accordion
    $(function() {
      $('.accordion').find('.accordion-title').on('click', function(){
          // Adds Active Class
          $(this).toggleClass('active');
          // Expand or Collapse This Panel
          $(this).next().slideToggle('fast');
          // Hide The Other Panels
          $('.accordion-content').not($(this).next()).slideUp('fast');
          // Removes Active Class From Other Titles
          $('.accordion-title').not($(this)).removeClass('active');		
      });
    });
  }

}
