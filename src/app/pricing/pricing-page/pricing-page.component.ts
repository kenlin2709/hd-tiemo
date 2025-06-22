import { Component } from '@angular/core';
import { PricingStepsComponent } from '../pricing-steps/pricing-steps.component';
import { PricingFeaturesComponent } from '../pricing-features/pricing-features.component';
import { PricingPackagesComponent } from '../pricing-packages/pricing-packages.component';

@Component({
  selector: 'app-pricing-page',
  imports: [
    PricingStepsComponent,
    PricingFeaturesComponent,
    PricingPackagesComponent
  ],
  standalone: true,
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss'] // <-- fixed here
})
export class PricingPageComponent {}