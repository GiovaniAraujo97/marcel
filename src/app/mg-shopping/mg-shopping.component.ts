import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mg-shopping',
  standalone: true,
  imports: [CommonModule],
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