import { Component, ViewChild } from '@angular/core';
import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomeBannerFeaturesComponent } from '../home-banner-features/home-banner-features.component';
import { HomeServiceModulesComponent } from '../home-service-modules/home-service-modules.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingModalComponent } from "../../shared/booking-modal/booking-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeBannerFeaturesComponent,
    HomeServiceModulesComponent,
    FormsModule,
    CommonModule,
    BookingModalComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('bookingModal') bookingModal!: BookingModalComponent;
  openBooking() {
    console.log(this.bookingModal);
    this.bookingModal.open();
  }
  handleBooking(data: any) {
    console.log('Booking received:', data);
    // TODO: Send to backend
  }



}