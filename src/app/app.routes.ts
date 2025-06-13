import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'factory',
        loadComponent: () => import('./pages/factory/factory.component').then((m) => m.FactoryComponent),
    },
    {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent),
    },
    {
        path: 'products-details',
        loadComponent: () => import('./pages/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
    },
    {
        path: 'sustainibility',
        loadComponent: () => import('./pages/sustainibility/sustainibility.component').then((m) => m.SustainibilityComponent),
    },
    {
        path: 'certificates',
        loadComponent: () => import('./pages/certificates/certificates.component').then((m) => m.CertificatesComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    },
    {
        path: 'career',
        loadComponent: () => import('./pages/career/career.component').then((m) => m.CareerComponent),
    },
];
