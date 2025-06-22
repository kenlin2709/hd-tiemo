import { Component, ViewChild } from '@angular/core';
import { BookingModalComponent } from '../shared/booking-modal/booking-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [BookingModalComponent, CommonModule]
})
export class GalleryComponent {
  @ViewChild('bookingModal') bookingModal!: BookingModalComponent;

  galleryImages = [
    { src: 'https://images.pexels.com/photos/4141962/pexels-photo-4141962.jpeg', alt: 'Luxury showroom showcase' },
    { src: 'https://wallup.net/wp-content/uploads/2017/11/23/533023-Lamborghini-car-car_show-photography-black_cars-luxury_cars-748x421.jpg', alt: 'Premium matte wrap' },
    { src: 'https://s1.1zoom.me/big0/477/329850-Sepik.jpg', alt: 'Sleek black paint protection' },
    { src: 'https://img.freepik.com/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg?semt=ais_hybrid&w=740', alt: 'PPF front coverage' },
    { src: 'https://images.pexels.com/photos/4141962/pexels-photo-4141962.jpeg', alt: 'Luxury showroom showcase' },
    { src: 'https://wallup.net/wp-content/uploads/2017/11/23/533023-Lamborghini-car-car_show-photography-black_cars-luxury_cars-748x421.jpg', alt: 'Premium matte wrap' },
    { src: 'https://s1.1zoom.me/big0/477/329850-Sepik.jpg', alt: 'Sleek black paint protection' },
    { src: 'https://img.freepik.com/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg?semt=ais_hybrid&w=740', alt: 'PPF front coverage' },
    { src: 'https://images.pexels.com/photos/4141962/pexels-photo-4141962.jpeg', alt: 'Luxury showroom showcase' },
    { src: 'https://wallup.net/wp-content/uploads/2017/11/23/533023-Lamborghini-car-car_show-photography-black_cars-luxury_cars-748x421.jpg', alt: 'Premium matte wrap' },
    { src: 'https://s1.1zoom.me/big0/477/329850-Sepik.jpg', alt: 'Sleek black paint protection' },
    { src: 'https://img.freepik.com/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg?semt=ais_hybrid&w=740', alt: 'PPF front coverage' },
    // Add more as needed
  ];

  openBooking() {
    this.bookingModal.open();
  }

  handleBooking(data: any) {
    console.log('Gallery booking:', data);
  }
}
