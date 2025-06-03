import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
  const token = sessionStorage.getItem('auth-token');
  const userRole = sessionStorage.getItem('user-access');
  const expectedRole = route.data['role'];

  console.log('Token:', token);
  console.log('User Role:', userRole);
  console.log('Expected Role:', expectedRole);

  if (!token) {
    this.router.navigate(['/login']);
    return false;
  }

  if (userRole === expectedRole) {
    return true;
  } else {
    console.log('Acesso negado: papel diferente');
    this.router.navigate(['/login']);
    return false;
  }
}

}
