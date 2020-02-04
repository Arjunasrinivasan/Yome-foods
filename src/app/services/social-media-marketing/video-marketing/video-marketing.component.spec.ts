import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMarketingComponent } from './video-marketing.component';

describe('VideoMarketingComponent', () => {
  let component: VideoMarketingComponent;
  let fixture: ComponentFixture<VideoMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
