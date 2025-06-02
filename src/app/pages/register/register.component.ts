import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    userType: 'cliente' | 'profissional' = 'cliente';
    registerForm!: FormGroup;

    constructor(private toastService: ToastrService, private router: Router) {
        this.registerForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])}
          )
    }

    navigate() {
        this.router.navigate(['/login']);
    }

}
