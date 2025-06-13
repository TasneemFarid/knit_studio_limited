import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [NavbarComponent, HeadingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productDetails: any = '';

  ngOnInit() {
    initFlowbite();
    this.productDetails = history.state.data;
    console.log(this.productDetails);
  }
}
