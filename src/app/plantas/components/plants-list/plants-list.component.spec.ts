import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantListComponent } from './plants-list.component';
import { PlantasService } from '../../plantas.service';
import { of } from 'rxjs';
import { Planta } from '../../../domain/modelos/plantas';
import { By } from '@angular/platform-browser';

class MockPlantasService {
  getData() {
    return of([
      new Planta(1, 'Pata de vaca', 'Bauhinia forficata', 'Interior', 500, 'Templado', 'Tierra orgánica'),
      new Planta(2, 'Chachafruto', 'Erythrina edulis', 'Exterior', 1000, 'Todos', 'Sustrato para huerto'),
      new Planta(3, 'Espatifilo', 'Spathiphyllum wallisii', 'Interior', 60, 'Templado, cálido', 'Tierra orgánica')
    ]);
  }
}

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantListComponent],
      providers: [
        { provide: PlantasService, useClass: MockPlantasService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three rows plus the header', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(3);

    const rowsContent = [
      { index: 0, expected: 'Pata de vaca' },
      { index: 1, expected: 'Chachafruto' },
      { index: 2, expected: 'Espatifilo' }
    ];

    rowsContent.forEach(row => {
      const rowCells = tableRows[row.index].queryAll(By.css('td'));
      expect(rowCells[1].nativeElement.textContent).toContain(row.expected);
    });
  });

  it('should display the title "Vivero El Otoño"', () => {
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent).toContain('Vivero El Otoño');
  });

  it('should correctly display the total number of interior and exterior plants', () => {
    const totalInteriorElement = fixture.debugElement.query(By.css('p:nth-of-type(1)')).nativeElement;
    const totalExteriorElement = fixture.debugElement.query(By.css('p:nth-of-type(2)')).nativeElement;

    expect(totalInteriorElement.textContent).toContain('Total plantas de interior: 2');
    expect(totalExteriorElement.textContent).toContain('Total plantas de exterior: 1');
  });
});
