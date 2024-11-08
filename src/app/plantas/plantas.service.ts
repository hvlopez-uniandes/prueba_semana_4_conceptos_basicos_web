import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from '../domain/modelos/plantas/index';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  private apiUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getData(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
