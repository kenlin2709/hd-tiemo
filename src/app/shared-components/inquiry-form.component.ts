import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment.prod';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, // ✅ Required for Reactive Forms
    CommonModule,
    TranslateModule,
  ],
})
export class InquiryFormComponent {
  inquiryForm: FormGroup;
  hearOptions = [
    { value: 'GOOGLE', translationKey: 'INQUIRY_FORM.HEAR_OPTIONS.GOOGLE' },
    {
      value: 'SOCIAL_MEDIA',
      translationKey: 'INQUIRY_FORM.HEAR_OPTIONS.SOCIAL_MEDIA',
    },
    { value: 'REFERRAL', translationKey: 'INQUIRY_FORM.HEAR_OPTIONS.REFERRAL' },
    { value: 'EVENT', translationKey: 'INQUIRY_FORM.HEAR_OPTIONS.EVENT' },
    { value: 'OTHER', translationKey: 'INQUIRY_FORM.HEAR_OPTIONS.OTHER' },
  ];
  loading = false;
  private EMAILJS_PUBLIC_KEY = environment.emailJsPublicKey;
  private translateService = inject(TranslateService);

  constructor(private fb: FormBuilder) {
    this.inquiryForm = this.fb.group({
      preferredName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      state: ['', Validators.required],
      hearAboutUs: ['', Validators.required],
      websiteRequirements: [''],
    });
  }

  onSubmit(): void {
    if (this.inquiryForm.valid) {
      this.loading = true;
      const templateParams = {
        preferred_name: this.inquiryForm.value.preferredName,
        email: this.inquiryForm.value.email,
        contact_number: this.inquiryForm.value.contactNumber,
        state: this.inquiryForm.value.state,
        hear_about_us: this.inquiryForm.value.hearAboutUs,
        website_requirements: this.inquiryForm.value.websiteRequirements,
      };

      emailjs
        .send(
          'service_5dui3dc',
          'template_cekeep8',
          templateParams,
          this.EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert(this.translateService.instant('INQUIRY_FORM.SUCCESS_MESSAGE'));
          this.inquiryForm.reset();
        })
        .catch(() => {
          alert(this.translateService.instant('INQUIRY_FORM.ERROR_MESSAGE'));
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
