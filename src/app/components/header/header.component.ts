import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() redirect:string = '';
  @Input() pageOne: string = '';

  constructor(private route:Router) {}

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('user-name');
    sessionStorage.removeItem('user-access');
    this.route.navigate(['/login']);
  }
}
