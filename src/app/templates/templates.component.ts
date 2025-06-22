import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TemplatesComponent {
  businessTemplates = [
    {
      id: 1,
      name: 'Magazine',
      src: 'https://cdn.shortpixel.ai/spai/w_997+q_lossless+ret_img+to_webp/websitedemos.net/wp-content/uploads/2025/03/bizpulse-04.jpg',
    },
    {
      id: 2,
      name: 'Car Wash',
      src: 'https://cdn.shortpixel.ai/spai/q_lossless+ret_img+to_webp/websitedemos.net/wp-content/uploads/2019/07/car-wash-02-homepage.jpg',
    },
    {
      id: 3,
      name: 'Bike Modification',
      src: 'https://cdn.shortpixel.ai/spai/q_lossless+ret_img+to_webp/websitedemos.net/wp-content/uploads/2020/12/bike-modification-04.jpg',
    },
  ];
  eCommerceTemplates = [
    {
      id: 1,
      name: 'Clothing Store',
      src: '/assets/images/ecommerce1.png',
    },
    {
      id: 2,
      name: 'Fashion Store',
      src: '/assets/images/ecommerce2.png',
    },
    {
      id: 3,
      name: 'Electronics Store',
      src: '/assets/images/ecommerce3.png',
    },
  ];
  landingPageTemplates = [
    {
      id: 1,
      name: 'Wellness Coaching',
      src: '/assets/images/landing_1.png',
    },
    {
      id: 2,
      name: 'Plant Shop',
      src: '/assets/images/landing_2.png',
    },
    {
      id: 3,
      name: 'Photographer',
      src: '/assets/images/landing_3.png',
    },
  ];
}