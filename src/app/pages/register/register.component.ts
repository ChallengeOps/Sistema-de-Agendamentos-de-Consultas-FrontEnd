import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LOGINService } from '../../services/login.service';
import { signup } from '../../model/signup';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm!: FormGroup;

    constructor(private toastService: ToastrService, private router: Router, private loginservice: LOGINService) {
       this.registerForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  acesso: new FormControl('CLIENTE') // valor padrão
});
    }

    signup() {this.loginservice.signup(
              this.registerForm.value.name,
              this.registerForm.value.email,
              this.registerForm.value.password,
              this.registerForm.value.acesso
    )?.subscribe({
  next: () => {
    this.toastService.success('Cadastro realizado com sucesso!');
    this.router.navigate(['/']);
  },
  error: (err) => {
    if (err.status === 400 && err.error?.errors) {
      err.error.errors.forEach((msg: string) => this.toastService.error(msg));
    } else {
      this.toastService.error('Erro inesperado ao cadastrar.');
    }
  }
});

}

    

    navigate() {
        this.router.navigate(['/login']);
    }

}
