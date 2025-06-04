import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() redirect: string = '';
  @Input() pageOne: string = '';

  name: string = '';
  role: string | null = null;

  showMenu = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.name = sessionStorage.getItem('user-name') ?? '';
    this.role = sessionStorage.getItem('user-role');  // Pega o role do usuário
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('user-name');
    sessionStorage.removeItem('user-access');
    sessionStorage.removeItem('user-role');
    this.router.navigate(['/login']);
  }
}
