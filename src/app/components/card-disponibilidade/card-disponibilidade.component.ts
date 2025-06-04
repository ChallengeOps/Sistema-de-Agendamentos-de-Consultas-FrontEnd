import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisponibilidadeService } from '../../services/disponibilidade.service';
import { ToastrService } from 'ngx-toastr';
import { DisponibilidadeList} from '../../model/disponibilidadeList';

@Component({
  selector: 'app-card-disponibilidade',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card-disponibilidade.component.html',
  styleUrl: './card-disponibilidade.component.css'
})
export class CardDisponibilidadeComponent implements OnInit {
  formDisp!: FormGroup;

  disponibilidades: DisponibilidadeList[] = []; 

  constructor(private disponibilidadeService: DisponibilidadeService, private toastsrvice: ToastrService) { // Substitua 'any' pelo serviço real se necessário
     this.formDisp = new FormGroup({
      data: new FormControl('', Validators.required),
      horarioInicio: new FormControl('', Validators.required),
      horarioFim: new FormControl('', Validators.required)
    });  }

  ngOnInit(): void {
    this.disponibilidadeService.getAllDisponibilidades().subscribe({
      next: (disponibilidades) => {
        this.disponibilidades = disponibilidades;
      },
      error: (error) => {
        this.toastsrvice.error('Erro ao carregar disponibilidades: ' + error.message, 'Erro');
      }
    });

  }

  excluir(id: number) {
    this.disponibilidadeService.deleteDisponibilidade(id).subscribe({
      next: () => {
        this.toastsrvice.success('Disponibilidade excluída com sucesso!', 'Sucesso');
        this.disponibilidades = this.disponibilidades.filter(disp => disp.id !== id);
      }
      , error: (error) => {
        this.toastsrvice.error('Erro ao excluir disponibilidade: ' + error.message, 'Erro');
      }
    });
  }

  enviar() {
    console.log('Formulário enviado:', this.formDisp.value);
  }

}
