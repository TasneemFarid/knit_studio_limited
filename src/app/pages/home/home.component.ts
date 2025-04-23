import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from '../../components/heading/heading.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ButtonsComponent,
    HeadingComponent,
    RouterModule,
    SlickCarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  certificates = [
    {img: "./assets/images/certificateLogo/globalOrganicTextileStandard.png"},
    {img: "./assets/images/certificateLogo/amfori.png"},
    {img: "./assets/images/certificateLogo/globalRecycledStandard.png"},
    {img: "./assets/images/certificateLogo/bci.png"},
    {img: "./assets/images/certificateLogo/ics.png"},
    {img: "./assets/images/certificateLogo/oekoTex.png"},
    {img: "./assets/images/certificateLogo/sedex.png"},
  ];

  brands = [
    {img: "./assets/images/certificateLogo/globalOrganicTextileStandard.png"},
  ];

  slideConfig = {
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 1000,
    dots: true,
    infinite: true
  };

  redirectToCareer() {
    window.location.href = '/career';
  }

}
