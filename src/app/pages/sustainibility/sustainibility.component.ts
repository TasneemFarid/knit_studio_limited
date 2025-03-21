import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-sustainibility',
  standalone: true,
  imports: [
    NavbarComponent,
    HeadingComponent,
    ButtonsComponent,
    FooterComponent
  ],
  templateUrl: './sustainibility.component.html',
  styleUrl: './sustainibility.component.css'
})
export class SustainibilityComponent {
    ngOnInit(): void {
      initFlowbite();
    }

  redirectToCareer() {
    window.location.href = '/certificates';
  }
}
