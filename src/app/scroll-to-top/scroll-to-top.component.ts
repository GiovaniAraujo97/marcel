import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  showButton = false;


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }
}