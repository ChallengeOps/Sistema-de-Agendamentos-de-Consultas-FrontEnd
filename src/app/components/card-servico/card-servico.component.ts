import { Component, OnInit } from '@angular/core';
import { Servico } from '../../model/servico';
import { ModalServicoComponent } from "../modal-servico/modal-servico.component";
import { CommonModule } from '@angular/common';
import { ServicoService } from '../../services/servico.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-servico',
  imports: [CommonModule],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent implements OnInit {

  servicos:Servico[] = [
    {
      id: 1,
      nome: 'Corte de Cabelo',
      descricao: 'Corte de cabelo masculino ou feminino, com estilo moderno.',
      duracaoEmMinutos: 30,
      nomeProfissional: 'João Silva'
    },
    {
      id: 2,
      nome: 'Manicure e Pedicure',
      descricao: 'Serviço completo de manicure e pedicure, incluindo esmaltação.',
      duracaoEmMinutos: 60,
      nomeProfissional: 'Maria Oliveira'
    },
    {
      id: 3,
      nome: 'Massagem Relaxante',
      descricao: 'Massagem relaxante para aliviar o estresse e a tensão muscular.',
      duracaoEmMinutos: 45,
      nomeProfissional: 'Ana Costa'
    }
  ];

  constructor(private servico: ServicoService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.servico.listarServicosPorProfissional().subscribe({
      next: (data) => {
        this.servicos = data;
      }
      , error: (error) => {
        console.error('Erro ao listar serviços:', error);
      }
    });
  }
  
  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este serviço?')) {
      this.servico.deletarServico(id).subscribe({
        next: () => {
          this.toast.success('Serviço excluído com sucesso!', 'Sucesso');
          this.servicos = this.servicos.filter(servico => servico.id !== id);
          
        },
        error: (error) => {
          console.error('Erro ao excluir serviço:', error);
          this.toast.error('Erro ao excluir serviço.', 'Erro');
        }
      });
    }
  }
}
