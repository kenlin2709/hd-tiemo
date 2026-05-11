import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScreenService } from '../../services/screen.service';

interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
  translationKey?: string;
  animationDelay?: string;
}

@Component({
  selector: 'app-floating-social',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './floating-social.component.html',
  styleUrls: ['./floating-social.component.scss'],
})
export class FloatingSocialComponent {
  screenService = inject(ScreenService);
  isExpanded = false;

  socialLinks: SocialMediaLink[] = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/eternalsoftware',
      icon: 'bi bi-instagram',
      translationKey: 'SOCIAL_MEDIA.INSTAGRAM',
      animationDelay: '0s',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/NextEternal',
      icon: 'bi bi-twitter-x',
      translationKey: 'SOCIAL_MEDIA.TWITTER',
      animationDelay: '0.1s',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/eternalsoftware',
      icon: 'bi bi-linkedin',
      translationKey: 'SOCIAL_MEDIA.LINKEDIN',
      animationDelay: '0.2s',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/61420428688',
      icon: 'bi bi-whatsapp',
      translationKey: 'SOCIAL_MEDIA.WHATSAPP',
      animationDelay: '0.3s',
    },
  ];

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
