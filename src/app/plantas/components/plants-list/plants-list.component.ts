import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PlantasService } from '../../plantas.service';
import { Planta } from '../../../domain/modelos/plantas';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants.component.css'],
})
export class PlantListComponent implements OnInit {
  plantas: Planta[] = [];
  searchText: string = '';
  page: number = 1;

  totalPlantasInterior: number = 0;
  totalPlantasExterior: number = 0;

  constructor(private readonly plantasService: PlantasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.obtenerPlantas();
  }

  obtenerPlantas(): void {
    this.plantasService.getData().subscribe({
      next: (data) => {
        this.plantas = data.map(Planta.fromApi);
        this.calculateTotals();
        this.cdr.detectChanges(); // Forzar la detección de cambios
      },
      error: (error) => {
        console.error('Error al obtener las plantas:', error);
      }
    });
  }

  calculateTotals(): void {
    this.totalPlantasInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.totalPlantasExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }
}
