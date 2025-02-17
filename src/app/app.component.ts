import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServicesComponent } from "./components/services/services.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServicesComponent, CustomerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'Trafalgar';
  nav_pages = ["Home", "Find a doctor", "Apps", "Testimonials", "About us"];
}
