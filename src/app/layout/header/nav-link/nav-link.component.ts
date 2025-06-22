import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScreenService } from '../../../services/screen.service';

export interface NavItem {
  path: string;
  labelKey: string;
  exact?: boolean;
}

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  item = input.required<NavItem>();
  screenService = inject(ScreenService);
}
