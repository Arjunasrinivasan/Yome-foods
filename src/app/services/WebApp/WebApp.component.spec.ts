import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppComponent } from './WebApp.component';

describe(' WebAppComponent', () => {
  let component: WebAppComponent;
  let fixture: ComponentFixture< WebAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  WebAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( WebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
