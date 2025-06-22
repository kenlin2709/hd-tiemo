import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavLinkComponent, NavItem } from './nav-link/nav-link.component';
import {
  LanguageSwitcherComponent,
  LangCode,
} from '../../shared/language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavLinkComponent,
    LanguageSwitcherComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentLanguage: LangCode = 'en';
  navItems: NavItem[] = [
    { path: '/', labelKey: 'HOME', exact: true },
    { path: '/service', labelKey: 'SERVICES' },
    { path: '/pricing', labelKey: 'PRICING' },
    { path: '/templates', labelKey: 'TEMPLATES' },
    { path: '/contact-us', labelKey: 'CONTACT_US' },
  ];

  private platformId = inject(PLATFORM_ID);
  translateService = inject(TranslateService);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('app-language') as LangCode;
      this.currentLanguage = saved || 'en';
      this.translateService.setDefaultLang(this.currentLanguage);
      this.translateService.use(this.currentLanguage);
    }
  }

  changeLanguage(lang: LangCode) {
    this.currentLanguage = lang;
    this.translateService.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app-language', lang);
    }
  }
}
