import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from '../model/servico';
import { CreateServico } from '../model/createServico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

   apiUrl:string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient,
    private router: Router
    ) { }

    listarServicos() {
      const token = sessionStorage.getItem('auth-token');
      const headers = { Authorization: `Bearer ${token}` };
      return this.httpClient.get<Servico[]>(`${this.apiUrl}/servicos`, { headers });
    }

    listarServicosPorProfissional() {
      const token = sessionStorage.getItem('auth-token');
      const headers = { Authorization: `Bearer ${token}` };
      return this.httpClient.get<Servico[]>(`${this.apiUrl}/profissionais/servicos`, { headers });
    }

    deletarServico(id: number) {
      const token = sessionStorage.getItem('auth-token');
      const headers = { Authorization: `Bearer ${token}` };
      return this.httpClient.delete(`${this.apiUrl}/servicos/${id}`, { headers });
    }

    criarServico(servico: CreateServico) {
      const token = sessionStorage.getItem('auth-token');
      const headers = { Authorization: `Bearer ${token}` };
      return this.httpClient.post<Servico>(`${this.apiUrl}/servicos`, servico, { headers });
    }
  }
