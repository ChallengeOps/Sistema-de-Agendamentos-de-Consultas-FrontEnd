import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private router: Router, private toast: ToastrService) {}

  ngOnInit() {
    this.name = sessionStorage.getItem('user-name') ?? '';
    this.role = sessionStorage.getItem('user-access');   // <-- alterado aqui!
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('user-name');
    sessionStorage.removeItem('user-access');
    sessionStorage.removeItem('user-access'); 
    this.router.navigate(['/login']);
  }
}
