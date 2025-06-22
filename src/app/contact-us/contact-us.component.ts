import { Component } from '@angular/core';
import { InquiryFormComponent } from '../shared-components/inquiry-form.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [InquiryFormComponent, CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {

  onSubmit() {
    console.log('Contact form submitted');
    // TODO: Add email service integration (Formspree, EmailJS, etc)
  }

}
