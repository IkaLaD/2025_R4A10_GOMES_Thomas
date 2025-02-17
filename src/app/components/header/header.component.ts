import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent {
  @Input({required : true}) title!:string;
  @Input({required : true}) nav_pages!:string[];
}
