import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MgPhonesComponent } from './mg-phones/mg-phones.component';
import { MgJoalheriaComponent } from './mg-joalheria/mg-joalheria.component';
import { MgShoppingComponent } from './mg-shopping/mg-shopping.component';
import { MgModaGirlComponent } from './mg-moda-girl/mg-moda-girl.component';
import { MentoriaComponent } from './mentoria/mentoria.component';
import { ScrollToTopComponent } from "./scroll-to-top/scroll-to-top.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    MgPhonesComponent,
    MgJoalheriaComponent,
    MgShoppingComponent,
    MgModaGirlComponent,
    MentoriaComponent,
    ScrollToTopComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}