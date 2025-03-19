import { Component } from '@angular/core';

@Component({
  selector: 'app-mg-shopping',
  standalone: true,
  imports: [],
  templateUrl: './mg-shopping.component.html',
  styleUrls: ['./mg-shopping.component.scss']
})
export class MgShoppingComponent {
  images = [
    'rp01.jpg',
    'rp02.jpg',
    'rp03.jpg',
    'rp04.jpg',
  ];
  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}