import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './components/footer/footer.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'knit-studio-limited';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
      AOS.init();
    }
  }
  // ngOnInit(): void {
  //   initFlowbite();
  //   AOS.init();
  // }

  showBackToTop = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    // console.log('Scrolling detected:', window.scrollY);
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToTop(): void {
    console.log('Scrolling to top...');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
