import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-work-strategy',
  templateUrl: './work-strategy.component.html',
  styleUrls: ['./work-strategy.component.css']
})
export class WorkStrategyComponent implements OnInit {

  brandName = environment.BrandName;
  
  constructor() { }

  ngOnInit() {
  }

}
