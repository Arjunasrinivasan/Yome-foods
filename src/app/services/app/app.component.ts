import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
selector: 'app-app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class ServicesAppComponent implements OnInit {
brandName = environment.BrandName;
constructor() { }

ngOnInit() {
}

}