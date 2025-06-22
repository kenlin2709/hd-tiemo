import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ]
})
export class BookingModalComponent {
  isOpen = false;

  @Output() submitted = new EventEmitter<any>();

  public open() {
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
  }

  public submit(form: any) {
    if (form.valid) {
      this.submitted.emit(form.value);
      this.close();
    }
  }
}
