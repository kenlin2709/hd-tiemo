import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ServiceCardComponent } from './components/service-card/service-card.component';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, ServiceCardComponent],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  services: ServiceItem[] = [
    {
      title: 'SERVICE_PAGE.RESPONSIVE_WEB.TITLE',
      description: 'SERVICE_PAGE.RESPONSIVE_WEB.DESCRIPTION',
      imageUrl: '/assets/images/responsive_web.svg',
      features: [
        'SERVICE_PAGE.RESPONSIVE_WEB.FEATURES.MOBILE_FIRST',
        'SERVICE_PAGE.RESPONSIVE_WEB.FEATURES.CROSS_BROWSER',
        'SERVICE_PAGE.RESPONSIVE_WEB.FEATURES.PERFORMANCE',
      ],
    },
    {
      title: 'SERVICE_PAGE.ECOMMERCE.TITLE',
      description: 'SERVICE_PAGE.ECOMMERCE.DESCRIPTION',
      imageUrl: '/assets/images/ecommerce.svg',
      features: [
        'SERVICE_PAGE.ECOMMERCE.FEATURES.PAYMENT_INTEGRATION',
        'SERVICE_PAGE.ECOMMERCE.FEATURES.INVENTORY',
        'SERVICE_PAGE.ECOMMERCE.FEATURES.ANALYTICS',
      ],
    },
    {
      title: 'SERVICE_PAGE.SEO.TITLE',
      description: 'SERVICE_PAGE.SEO.DESCRIPTION',
      imageUrl: '/assets/images/seo.svg',
      features: [
        'SERVICE_PAGE.SEO.FEATURES.OPTIMIZATION',
        'SERVICE_PAGE.SEO.FEATURES.RANKING',
        'SERVICE_PAGE.SEO.FEATURES.REPORTING',
      ],
    },
    {
      title: 'SERVICE_PAGE.DEVELOPMENT.TITLE',
      description: 'SERVICE_PAGE.DEVELOPMENT.DESCRIPTION',
      imageUrl: '/assets/images/development.svg',
      features: [
        'SERVICE_PAGE.DEVELOPMENT.FEATURES.DESIGN',
        'SERVICE_PAGE.DEVELOPMENT.FEATURES.DEVELOPMENT',
        'SERVICE_PAGE.DEVELOPMENT.FEATURES.DEPLOYMENT',
        'SERVICE_PAGE.DEVELOPMENT.FEATURES.MAINTENANCE',
      ],
    },
  ];

  ngOnInit(): void {}
}
