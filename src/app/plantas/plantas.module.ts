import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlantListComponent } from './components/plants-list/plants-list.component';

@NgModule({
  declarations: [PlantListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class PlantsModule {}
