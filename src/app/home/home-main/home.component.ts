import { Component } from '@angular/core';
import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomeBannerFeaturesComponent } from '../home-banner-features/home-banner-features.component';
import { HomeServiceModulesComponent } from '../home-service-modules/home-service-modules.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeBannerFeaturesComponent,
    HomeServiceModulesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}