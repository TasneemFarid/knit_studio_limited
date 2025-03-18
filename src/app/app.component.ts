import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
import { FooterComponent } from './components/footer/footer.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ContactComponent,
    FooterComponent
    // SlickCarouselModule,
    // HeadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'knit-studio-limited';

  ngOnInit(): void {
    initFlowbite();
    AOS.init();
  }
}
