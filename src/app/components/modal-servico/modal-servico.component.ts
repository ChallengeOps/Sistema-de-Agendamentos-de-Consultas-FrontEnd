import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Servico } from '../../model/servico';
import { ServicoService } from '../../services/servico.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateServico } from '../../model/createServico';


@Component({
  selector: 'app-modal-servico',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-servico.component.html',
  styleUrl: './modal-servico.component.css'
})
export class ModalServicoComponent implements OnInit, OnChanges {

  @Input() modo: 'criar' | 'editar' = 'criar';
  @Input() servicoEditar: Servico | null = null;
  @Input() visivel = false;
  @Input() name: string = '';
  @Output() fechar = new EventEmitter<void>();
  @Output() submitir = new EventEmitter<CreateServico>();
  @Output() salvarEvento = new EventEmitter<CreateServico>();

  servicoForm!: FormGroup;

  constructor(private toastr: ToastrService) {
    this.servicoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
      duracaoEmMinutos: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  ngOnInit() {
    // Só executa uma vez, normalmente não precisamos mais disso.
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['servicoEditar'] && this.servicoEditar) {
      console.log('Editando serviço:', this.servicoEditar);
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

  salvar() {
    if (this.servicoForm.valid) {
      const servico: CreateServico = {
        nome: this.servicoForm.value.nome,
        descricao: this.servicoForm.value.descricao,
        duracaoEmMinutos: this.servicoForm.value.duracaoEmMinutos
      };
      this.salvarEvento.emit(servico);
      this.servicoForm.reset();
    } else {
      this.toastr.error('Por favor, preencha todos os campos corretamente.', 'Erro');
      this.servicoForm.markAllAsTouched();
    }
  }

  onSalvarOuEditar() {
    if (this.modo === 'criar') {
      console.log('Modo de criação ativo');
      this.salvar();
    } else {
      console.log('Modo de edição ativo', this.modo);
      this.submit();
    }
  }
}
