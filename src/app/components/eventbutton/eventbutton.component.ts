import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-eventbutton',
  templateUrl: './eventbutton.component.html',
  styleUrl: './eventbutton.component.css',
})
export class EventButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}