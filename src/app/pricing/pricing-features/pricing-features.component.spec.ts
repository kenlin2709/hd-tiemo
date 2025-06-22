import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFeaturesComponent } from './pricing-features.component';

describe('PricingFeaturesComponent', () => {
  let component: PricingFeaturesComponent;
  let fixture: ComponentFixture<PricingFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
