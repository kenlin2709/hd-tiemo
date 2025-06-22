import { NgForOf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-hero',
  imports: [NgForOf],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent implements OnInit, OnDestroy {
  desktopImages: string[] = [
      '/assets/images/sample1.png',
      '/assets/images/sample2.png',
      '/assets/images/sample3.png',
      '/assets/images/sample4.png'
  ];

  public selectedDesktop: string = this.desktopImages[0];
  public macFrameUrl = '/assets/images/mac_frame.png';
  public backgroundUrl = '/assets/images/background.png'; 
  public intervalSubscription?: Subscription;
  private timeElapsed = 0;

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  selectDesktop(img: string) {
    this.selectedDesktop = img;
  }

  nextDesktop() {
    const currentIndex = this.desktopImages.indexOf(this.selectedDesktop);
    const nextIndex = (currentIndex + 1) % this.desktopImages.length;
    this.selectedDesktop = this.desktopImages[nextIndex];
  }
}
