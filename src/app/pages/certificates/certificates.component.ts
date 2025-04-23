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
  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/certificates/NSI - AD APPLICATION.pdf';
    link.download = 'sample.pdf';
    link.click();
  }
}
