import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
      NavbarComponent,
      HeadingComponent,
      ButtonsComponent,
      FooterComponent
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
