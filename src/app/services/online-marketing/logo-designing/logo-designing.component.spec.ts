import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDesigningComponent } from './logo-designing.component';

describe('LogoDesigningComponent', () => {
  let component: LogoDesigningComponent;
  let fixture: ComponentFixture<LogoDesigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDesigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
