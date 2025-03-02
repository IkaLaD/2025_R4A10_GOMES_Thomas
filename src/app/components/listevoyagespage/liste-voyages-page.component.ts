import {Component, OnInit} from '@angular/core';
import { VoyageCardComponent } from "../voyagecard/voyage-card.component";
import { VoyageService } from "../../services/voyage.service";
import { Voyage } from "../../services/voyage.type";

@Component({
  selector: 'app-listevoyagespage',
  standalone: true,
  imports: [VoyageCardComponent],
  templateUrl: './liste-voyages-page.component.html',
  styleUrls: ['./liste-voyages-page.component.css']
})
export class ListeVoyagesPageComponent implements OnInit {
  listeVoyage: Voyage[];
  currentPage: number = 0;
  pageSize: number = 20;
  totalPages: number = 0;

  constructor(private voyageService: VoyageService) {
    this.listeVoyage = this.voyageService.getVoyage();
  }
  ngOnInit() {
    this.listeVoyage = this.voyageService.getVoyagesPage(this.currentPage, this.pageSize);
    this.totalPages = Math.max(1,Math.ceil(this.voyageService.getVoyage().length / this.pageSize));
  }

  suprimmerElement(id: number) {
    this.voyageService.suprimmerVoyage(id);
    this.listeVoyage = this.voyageService.getVoyagesPage(this.currentPage, this.pageSize);
    this.totalPages = Math.max(1,Math.ceil(this.voyageService.getVoyage().length / this.pageSize));
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVoyages();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVoyages();
    }
  }

  updateVoyages() {
    this.listeVoyage = this.voyageService.getVoyagesPage(this.currentPage, this.pageSize);
  }

}
