import { Component } from '@angular/core';

@Component({
  selector: 'app-moda-girl',
  standalone: true,
  imports: [],
  templateUrl: './mg-moda-girl.component.html',
  styleUrls: ['./mg-moda-girl.component.scss']
})
export class MgModaGirlComponent {
  images = [
    'mg01.jpg',
    'mg02.jpg',
    'mg03.jpg',
    'mg04.jpg',
  ];
  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}