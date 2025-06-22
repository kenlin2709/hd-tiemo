import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="service-card" [class.reverse]="reverse">
      <div class="service-content">
        <h3>{{ title | translate }}</h3>
        <p>{{ description | translate }}</p>
        <ul *ngIf="features && features.length">
          <li *ngFor="let feature of features">{{ feature | translate }}</li>
        </ul>
      </div>
      <div class="service-image">
        <img [src]="imageUrl" [alt]="title" />
      </div>
    </div>
  `,
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() features?: string[];
  @Input() reverse = false;
}
