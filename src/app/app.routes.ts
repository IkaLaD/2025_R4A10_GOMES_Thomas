import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListeVoyagesPageComponent } from './components/listevoyagespage/liste-voyages-page.component';
import { VoyagepageComponent } from './components/voyagepage/voyagepage.component';
import { GenererVoyageComponent } from './components/generationvoyage/generationvoyage.component';
export const routes: Routes = [
    {
        component: HomepageComponent,
        path: "home"
    },
    {
        component: ListeVoyagesPageComponent,
        path: "listevoyages"
    },
    {
        component: VoyagepageComponent,
        path: "pagevoyage/:id"
    },
    {
        component: GenererVoyageComponent,
        path: "generationvoyage"
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
];
