import { Component, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScreenService } from '../../services/screen.service';

export type LangCode = 'en' | 'zh';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  currentLanguage = input.required<LangCode>();
  languageChange = output<LangCode>();
  screenService = inject(ScreenService);

  languages = [
    { code: 'en' as LangCode, label: 'English' },
    { code: 'zh' as LangCode, label: '简体中文' },
  ];

  select(code: LangCode) {
    this.languageChange.emit(code);
  }
}
