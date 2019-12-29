import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.css']
})
export class SaasComponent implements OnInit {
  brandName = environment.BrandName;
  constructor() { }

  ngOnInit() {
  }

}
