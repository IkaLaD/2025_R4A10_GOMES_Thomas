import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-voyagecard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './voyage-card.component.html',
  styleUrl: './voyage-card.component.css'
})
export class VoyageCardComponent {
  @Input() destination!: string;
  @Input() description!: string;
  @Input() prix!: number;
  @Input({transform: numberAttribute}) id!: number;
  @Output() suprimmer = new EventEmitter<number>();

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmSuprimmer() {
    this.suprimmer.emit(this.id);
    this.closeModal();
  }
}
