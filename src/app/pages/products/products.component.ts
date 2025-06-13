import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
      NavbarComponent,
      HeadingComponent,
      ButtonsComponent,
      FooterComponent,
      ProductDetailsComponent
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
  }

  productsMens = [
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8931 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8933 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8850 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8928 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8837 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8856 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8871 copy.jpg"
    },
    {
      name: "Men's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/men/195A8898 copy.jpg"
    },
  ];

  productsWomens = [
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8809 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8828 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8831 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8861 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8862 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8863 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8864 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8866 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8867 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8889 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8892 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8894 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8897 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8899 copy.jpg"
    },
    {
      name: "Women's T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/women/195A8904 copy.jpg"
    },
  ];

  productsKids = [
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8817 copy.jpg"
    },
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8820 copy.jpg"
    },
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8821 copy.jpg"
    },
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8823 copy.jpg"
    },
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8824 copy.jpg"
    },
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8830 copy.jpg"
    },
    {
      name: "Kids T-Shirt",
      material: "Silk, Cashmere, Virgin Wool",
      image: "../../../assets/products/kids/195A8895 copy.jpg"
    },
  ];

  viewDetails(value: any): void {
  this.router.navigate(['/products-details'],  { state: { data: value } });
  }
}
