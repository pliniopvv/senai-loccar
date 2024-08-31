import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  async list(): Promise<Veiculo[]> {
    return await firstValueFrom(this.http.get<Veiculo[]>(`${environment.API}`));
  }

  async get(id: number): Promise<Veiculo> {
    return await firstValueFrom(this.http.get<Veiculo>(`${environment.API}/${id}`));
  }

}
