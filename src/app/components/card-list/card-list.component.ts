import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cards = [
    { icon: 'assets/search.png', title: 'Search doctor', description: 'Choose your doctor from thousands of specialists, general, and trusted hospitals' },
    { icon: 'assets/pharmacy.png', title: 'Online pharmacy', description: 'Buy your medicines with our mobile application with a simple delivery system' },
    { icon: 'assets/consultation.png', title: 'Consultation', description: 'Free consultation with our trusted doctors and get the best recommendations' },
    { icon: 'assets/details.png', title: 'Details info', description: 'Free consultation with our trusted doctors and get the best recommendations' },
    { icon: 'assets/emergency.png', title: 'Emergency care', description: 'You can get 24/7 urgent care for yourself or your children and your lovely family' },
    { icon: 'assets/tracking.png', title: 'Tracking', description: 'Track and save your medical history and health data' }
  ];
}