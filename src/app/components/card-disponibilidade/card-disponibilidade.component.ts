import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-disponibilidade',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card-disponibilidade.component.html',
  styleUrl: './card-disponibilidade.component.css'
})
export class CardDisponibilidadeComponent {
  formDisp!: FormGroup;

  disponibilidades = [
    {
      id: 1,
      data: '2023-10-01',
      horarioInicio: '08:00',
      horarioFim: '12:00',
      nomeProfissional: 'João Silva'
    },
    {
      id: 2,
      data: '2023-10-01',
      horarioInicio: '14:00',
      horarioFim: '18:00',
      nomeProfissional: 'Maria Oliveira'
    },
    {
      id: 3,
      data: '2023-10-02',
      horarioInicio: '09:00',
      horarioFim: '13:00',
      nomeProfissional: 'Ana Costa'
    }
  ];

  constructor(){
     this.formDisp = new FormGroup({
      data: new FormControl('', Validators.required),
      horarioInicio: new FormControl('', Validators.required),
      horarioFim: new FormControl('', Validators.required)
    });  }

  excluir(id: number) {
    console.log(`Excluindo disponibilidade com ID: ${id}`);
  }

  enviar() {
    console.log('Formulário enviado:', this.formDisp.value);
  }

}
