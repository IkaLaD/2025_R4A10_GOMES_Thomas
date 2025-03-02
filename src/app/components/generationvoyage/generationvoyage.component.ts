import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from "../../services/voyage.type";

@Component({
  selector: 'app-generer-voyage',
  standalone: true,
  templateUrl: './generationvoyage.component.html',
  styleUrls: ['./generationvoyage.component.sass']
})
export class GenererVoyageComponent implements OnInit {
  listeVoyages: Voyage[] = [];
  voyageAleatoire: Voyage | null = null;

  constructor(private voyageService: VoyageService) {}

  ngOnInit() {
    this.listeVoyages = this.voyageService.getVoyage();
  }

  genererVoyage() {
    if (this.listeVoyages.length === 0) {
      return;
    }

    const randomIndexDestination = Math.floor(Math.random() * this.listeVoyages.length);
    const randomIndexDescription = Math.floor(Math.random() * this.listeVoyages.length);
    const randomIndexPrix = Math.floor(Math.random() * this.listeVoyages.length);

    this.voyageAleatoire = {
      id: Date.now().toString(),
      destination: this.listeVoyages[randomIndexDestination].destination,
      description: this.listeVoyages[randomIndexDescription].description,
      prix: this.listeVoyages[randomIndexPrix].prix
    };
  }

  validerAjout() {
    if (this.voyageAleatoire) {
      this.voyageService.ajouterVoyage(this.voyageAleatoire);
      this.voyageAleatoire = null;
    }
  }

  supprimerVoyage() {
    this.voyageAleatoire = null;
  }
}
