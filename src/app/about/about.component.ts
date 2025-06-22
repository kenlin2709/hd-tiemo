import { Component, ViewChild } from '@angular/core';
import { BookingModalComponent } from '../shared/booking-modal/booking-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [BookingModalComponent]
})
export class AboutComponent {
  @ViewChild('bookingModal') bookingModal!: BookingModalComponent;

  openBooking() {
    this.bookingModal.open();
  }

  handleBooking(data: any) {
    console.log('About booking:', data);
  }
}
