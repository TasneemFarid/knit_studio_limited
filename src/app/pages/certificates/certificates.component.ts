import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    NavbarComponent,
    HeadingComponent,
    ButtonsComponent,
    FooterComponent
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  oekoTexPdfDownload() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/Oekotex Certificate -2024-25.pdf';
    link.download = 'Oekotex Certificate -2024-25.pdf';
    link.click();
  }

  GrsPdfDownload() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/GRS Certificate 2024-2025 .pdf';
    link.download = 'GRS Certificate 2024-2025 .pdf';
    link.click();
  }
  
  BsciPdfDownload() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/BSCI Audit Report -2024-26.pdf';
    link.download = 'BSCI Audit Report -2024-26.pdf';
    link.click();
  }

  SedexPdfDownload() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/Sedex Report 2024-25.pdf';
    link.download = 'Sedex Report 2024-25.pdf';
    link.click();
  }

  GotsPdfDownload() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/122087_GOTS_Certificate_Knit Studio Limited_20241021_signed.pdf';
    link.download = '122087_GOTS_Certificate_Knit Studio Limited_20241021_signed.pdf';
    link.click();
  }

  IcsPdfDownload() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/ICS Audit Report -2024-25.pdf';
    link.download = 'ICS Audit Report -2024-25.pdf';
    link.click();
  }
}
