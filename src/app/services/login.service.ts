import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDTO } from '../model/respondedDTO';
import { signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class LOGINService {

  apiUrl:string = 'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient,
    private router: Router
    ) { }

   login(email: string, password: string) {
  return this.httpClient.post<ResponseDTO>(`${this.apiUrl}/login`, { email, password }, { observe: 'response' });
}

 signup(name: string, email: string, password: string, acesso: string) {
  const payload = { name, email, password };

  if (acesso === 'PROFISSIONAL') {
    return this.httpClient.post<ResponseDTO>(
      `${this.apiUrl}/registerProfissional`,
      payload,
      { observe: 'response' }
    );
  }

  if (acesso === 'CLIENTE') {
    return this.httpClient.post<ResponseDTO>(
      `${this.apiUrl}/register`,
      payload,
      { observe: 'response' }
    );
  }

  return null;
}


}
