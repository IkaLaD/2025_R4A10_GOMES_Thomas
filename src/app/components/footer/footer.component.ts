import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    section = [
      {title: 'Compagny', links: ['About', 'Testimonials', 'Find a doctor', 'Apps']},
      {title: 'Region', links: ['Indonesia', 'Singapore', 'Hongkong', 'Canada']},
      {title: 'Help', links: ['Help center', 'Contact support', 'Instructions', 'How it works']}
    ]
}
