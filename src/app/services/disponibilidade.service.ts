import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Disponibilidade } from '../model/disponibilidade';
import { DisponibilidadeList } from '../model/disponibilidadeList';

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

  deleteDisponibilidade(id: number) {
  const token = sessionStorage.getItem('auth-token');
  const headers = { Authorization: `Bearer ${token}` };
  return this.httpClient.delete(this.apiUrl + `/${id}`, { headers });
}

createDisponibilidade(disponibilidade: Disponibilidade) {
  const token = sessionStorage.getItem('auth-token');
  const headers = { Authorization: `Bearer ${token}` };
  return this.httpClient.post(this.apiUrl, disponibilidade, { headers });
}


  getAllDisponibilidades() {
    const token = sessionStorage.getItem('auth-token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.httpClient.get<DisponibilidadeList[]>(this.apiUrl+ `/profissional`, { headers });
  }
}
