import { Component, Input } from '@angular/core';

@Component({
  selector: 'heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {

  @Input() subHeading: string = ''
  @Input() heading: string = ''
}
