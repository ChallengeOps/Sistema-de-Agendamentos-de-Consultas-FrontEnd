import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Disponibilidade } from '../model/disponibilidade';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {
  apiUrl:string = 'http://localhost:8080/disponibilidades';

  constructor(private httpClient: HttpClient,
    private router: Router
    ) { }


  getDisponibilidades(idProfissional: number) {
    const token = sessionStorage.getItem('auth-token');
      const headers = { Authorization: `Bearer ${token}` };
    return this.httpClient.get<Disponibilidade[]>(`${this.apiUrl}/servico/+${idProfissional}`, { headers });
  }
}
