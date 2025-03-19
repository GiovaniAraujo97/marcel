import { Component } from '@angular/core';

@Component({
  selector: 'app-mg-phones',
  standalone: true,
  imports: [],
  templateUrl: './mg-phones.component.html',
  styleUrls: ['./mg-phones.component.scss']
})
export class MgPhonesComponent {
  images = [
    'ip01.jpg',
    'ip02.jpg',
    'ip03.jpg',
    'ip04.jpg',
  ];
  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}