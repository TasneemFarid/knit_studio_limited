import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from '../../components/heading/heading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ButtonsComponent,
    HeadingComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
