import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LOGINService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
// Define the LoginForm interface with appropriate fields


export class LoginComponent {

    loginForm!: FormGroup;

    constructor(private toastService:ToastrService, private router: Router, private service: LOGINService){
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
    }

     navigate() {
    this.router.navigate(['/register']);
  }


   login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log('Email:', email);
      console.log('Password:', password);

      this.service.login(email, password).subscribe({
        next: (response) => {
          const body = response.body;
          if (!body) {
            this.toastService.error('Resposta inválida do servidor.');
            return;
          }
          sessionStorage.setItem('auth-token', body.token);
          sessionStorage.setItem('user-name', body.name);
          sessionStorage.setItem('user-access', body.access);
          console.log('Token:', body.token);
          console.log('Nome do usuário:', body.name);
          console.log('Acesso do usuário:', body.access);

          this.toastService.success('Login realizado com sucesso!');

          const access = body.access.toLowerCase();
          if (access === 'cliente') {
            this.router.navigate(['/cliente']);
          } else if (access === 'profissional') {
            this.router.navigate(['/profissional']);
          } else {
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.toastService.error('Falha no login. Verifique suas credenciais.');
          console.error(err);
        }
      });
    }
  }
}
