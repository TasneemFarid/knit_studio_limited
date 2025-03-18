import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    CommonModule
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

    showBackToTop = false;
  
    @HostListener('window:scroll', [])
    onScroll(): void {
      console.log('Scrolling detected:', window.scrollY);
      this.showBackToTop = window.scrollY > 500;
    }
  
    scrollToTop(): void {
      console.log('Scrolling to top...');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
