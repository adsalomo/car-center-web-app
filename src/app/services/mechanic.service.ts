import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Mechanic from '../models/mechanic.models';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private http: HttpClient) { }

  save(mechanic: Mechanic) {
    return this.http.post(`${environment.apiUrl}/mechanic`, mechanic);
  }

  getAll() {
    return this.http.get(`${environment.apiUrl}/mechanic`);
  }
}
