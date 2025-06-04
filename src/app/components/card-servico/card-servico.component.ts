import { Component } from '@angular/core';
import { Servico } from '../../model/servico';
import { ModalServicoComponent } from "../modal-servico/modal-servico.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-servico',
  imports: [CommonModule, ModalServicoComponent],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent {

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
  ]
 
 

 
}
