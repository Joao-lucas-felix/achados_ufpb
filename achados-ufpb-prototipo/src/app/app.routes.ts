import { Routes } from '@angular/router';

import { CatalogPageComponent } from './pages/catalog-page.component';
import { FlowPageComponent } from './pages/flow-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { ItemDetailPageComponent } from './pages/item-detail-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalogo', component: CatalogPageComponent },
  { path: 'item/:slug', component: ItemDetailPageComponent },
  { path: 'fluxo', component: FlowPageComponent },
  { path: '**', redirectTo: '' },
];
