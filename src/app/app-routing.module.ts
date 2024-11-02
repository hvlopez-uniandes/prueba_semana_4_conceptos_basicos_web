import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plantas/components/plants-list/plants-list.component';

const routes: Routes = [
  { path: '', component: PlantListComponent },  // La página principal muestra el listado de películas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
