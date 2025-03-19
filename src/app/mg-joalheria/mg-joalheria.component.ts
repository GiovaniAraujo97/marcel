import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mg-joalheria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mg-joalheria.component.html',
  styleUrls: ['./mg-joalheria.component.scss']
})
export class MgJoalheriaComponent {
  images = [
    'jo01.jpg',
    'jo02.jpg',
    'jo03.jpg',
    'jo04.jpg',
  ];
  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}