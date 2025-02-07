import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    HeadingComponent,
    ButtonsComponent,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
