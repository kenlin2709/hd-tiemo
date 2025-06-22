import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerFeaturesComponent } from './home-banner-features.component';

describe('HomeBannerFeaturesComponent', () => {
  let component: HomeBannerFeaturesComponent;
  let fixture: ComponentFixture<HomeBannerFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBannerFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
