import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { map, startWith } from 'rxjs/operators';

export enum ScreenType {
  Mobile = 'Mobile',
  Tablet = 'Tablet',
  Desktop = 'Desktop',
}

@Injectable({ providedIn: 'root' })
export class ScreenService {
  private screen$ = new BehaviorSubject<ScreenType>(ScreenType.Desktop);
  /** stream of current screen type */
  screenType$: Observable<ScreenType> = this.screen$.asObservable();

  /** convenience flags */
  isMobile$: Observable<boolean> = this.screenType$.pipe(
    map((t) => t === ScreenType.Mobile)
  );
  isTablet$: Observable<boolean> = this.screenType$.pipe(
    map((t) => t === ScreenType.Tablet)
  );
  isDesktop$: Observable<boolean> = this.screenType$.pipe(
    map((t) => t === ScreenType.Desktop)
  );

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const detect = () => {
        const w = window.innerWidth;
        if (w < 768) return ScreenType.Mobile;
        if (w < 992) return ScreenType.Tablet;
        return ScreenType.Desktop;
      };
      fromEvent(window, 'resize')
        .pipe(startWith(null))
        .subscribe(() => this.screen$.next(detect()));
    }
  }
}
