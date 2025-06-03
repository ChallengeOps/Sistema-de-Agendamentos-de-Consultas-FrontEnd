import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from '../model/agendamento';
import { agendar } from '../model/agendar';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  apiUrl:string = 'http://localhost:8080/agendamentos';
  constructor(private httpClient: HttpClient,
    private router: Router
    ) { }

  agendar(agendamento: agendar) {
    const token = sessionStorage.getItem('auth-token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.httpClient.post(this.apiUrl, agendamento, { headers, responseType: 'text' });

  }

}
