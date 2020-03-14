import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsInsightsComponent } from './Analytics-insights.component';

describe(' AnalyticsInsightsComponent', () => {
  let component: AnalyticsInsightsComponent;
  let fixture: ComponentFixture< AnalyticsInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AnalyticsInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AnalyticsInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
