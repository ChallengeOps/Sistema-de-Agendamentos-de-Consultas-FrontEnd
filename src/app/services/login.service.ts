import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDTO } from '../model/respondedDTO';

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


  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('auth-token');
  }

  getUserAccess(): string | null {
    return sessionStorage.getItem('user-access');
  }

}
