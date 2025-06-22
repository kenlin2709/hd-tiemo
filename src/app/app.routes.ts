import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonModule } from '@angular/common';
import { PricingPageComponent } from './pricing/pricing-page/pricing-page.component';
import { HomeComponent } from './home/home-main/home.component';
import { AppTranslationModule } from './app-translation.module';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'contact', component: ContactUsComponent },
  // Wildcard route for a 404 page (optional)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule],
})
export class AppRoutingModule {}