import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Planta } from '../../../domain/modelos/plantas';
import { PlantsService } from '../../plantas.service';


@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantListComponent implements OnInit {
  plantas: Planta[] = [];
  filteredPlantas: Planta[] = [];
  searchText: string = '';
  sortDirection: boolean = true; // true for ascending, false for descending
  page: number = 1;

  constructor(private plantasService: PlantsService) {}

  ngOnInit(): void {
    this.plantasService.getData().subscribe(
      (data) => {
        this.plantas = data;
        this.filteredPlantas = data;
      },
      (error) => {
        console.error('Error al obtener las plantas:', error);
      }
    );
  }

  filterPlantas(): void {
    this.filteredPlantas = this.plantas.filter(planta =>
      planta.nombre_comun.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  toggleSortDirection(): void {
    this.sortDirection = !this.sortDirection;
    this.filteredPlantas.sort((a, b) => {
      if (this.sortDirection) {
        return a.nombre_comun.localeCompare(b.nombre_comun);
      } else {
        return b.nombre_comun.localeCompare(a.nombre_comun);
      }
    });
  }
}
