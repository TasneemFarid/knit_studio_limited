import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
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
