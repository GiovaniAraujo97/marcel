import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  isPulsing = false;

  navigateToMgPhones() {
    this.isPulsing = true;
    setTimeout(() => {
      this.isPulsing = false;
      const mgPhonesSection = document.getElementById('mg-phones');
      if (mgPhonesSection) {
        mgPhonesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

    navigateToMgJoia() {
      this.isPulsing = true;
      setTimeout(() => {
        this.isPulsing = false;
        const mgJoiaSection = document.getElementById('mg-joalheria');
        if (mgJoiaSection) {
          mgJoiaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }

    navigateToMgShopping() {
      this.isPulsing = true;
      setTimeout(() => {
        this.isPulsing = false;
        const mgShoppingSection = document.getElementById('mg-shopping');
        if (mgShoppingSection) {
          mgShoppingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }

    navigateToMgModaGirl() {
      this.isPulsing = true;
      setTimeout(() => {
        this.isPulsing = false;
        const mgModaGirlSection = document.getElementById('mg-moda-girl');
        if (mgModaGirlSection) {
          mgModaGirlSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }

    navigateToMentoria() {
      this.isPulsing = true;
      setTimeout(() => {
        this.isPulsing = false;
        const mgModaMentoria = document.getElementById('mentoria');
        if (mgModaMentoria) {
          mgModaMentoria.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
}