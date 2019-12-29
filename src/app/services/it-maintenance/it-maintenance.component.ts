import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-it-maintenance',
  templateUrl: './it-maintenance.component.html',
  styleUrls: ['./it-maintenance.component.css']
})
export class ItMaintenanceComponent implements OnInit {
  brandName = environment.BrandName;
  constructor() { }

  ngOnInit() {
  }

}
