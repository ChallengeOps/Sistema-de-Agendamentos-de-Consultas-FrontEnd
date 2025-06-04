import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servico } from '../../model/servico';
import { ServicoService } from '../../services/servico.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-servico',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-servico.component.html',
  styleUrl: './modal-servico.component.css'
})
export class ModalServicoComponent implements OnInit {

  @Input() servicoEditar: Servico | null = null;
   @Input() visivel = false;
   @Input() name: string = '';
  @Output() fechar = new EventEmitter<void>();
  @Output() submitir = new EventEmitter<Servico>();

    servicoForm!: FormGroup;

    constructor() {
      this.servicoForm = new FormGroup({
        nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
        descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
        duracaoEmMinutos: new FormControl('', [Validators.required, Validators.min(1)]),
      });
     }

  ngOnInit() {
    if (this.servicoEditar) {
      this.servicoForm.patchValue({
        nome: this.servicoEditar.nome,
        descricao: this.servicoEditar.descricao,
        duracaoEmMinutos: this.servicoEditar.duracaoEmMinutos
      });
    }
  }


  onFechar() {
    this.fechar.emit();
  }

  onBackdropClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.onFechar();
    }
  }
  
  submit() {
    this.submitir.emit(this.servicoForm.value);
  }
   
}
