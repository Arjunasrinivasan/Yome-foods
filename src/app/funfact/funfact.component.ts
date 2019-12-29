import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-funfact',
  templateUrl: './funfact.component.html',
  styleUrls: ['./funfact.component.css']
})
export class FunfactComponent implements OnInit {

  public number: number = 2000;
  public observable: Observable<boolean>;
  public observer: Observer<boolean>;

  constructor() {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer);

    setTimeout(() => this.observer.next(true), 2000)
  }

  ngOnInit() {
  }

}
