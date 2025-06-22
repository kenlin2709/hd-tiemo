import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingStepsComponent } from './pricing-steps.component';

describe('PricingStepsComponent', () => {
  let component: PricingStepsComponent;
  let fixture: ComponentFixture<PricingStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
