import { Component, Input } from '@angular/core';
import { Servico } from '../../model/servico';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  servicos: Servico[] = [
    {
      //crie com base no modelo Servico
      id: 1,
      nome: 'Corte de Cabelo',
      descricao: 'Corte de cabelo masculino ou feminino, com estilo moderno.',
      duracaoEmMinutos: 30,
      nomeProfissional: 'João Silva'
    },
    {
      id: 2,
      nome: 'Manicure',
      descricao: 'Serviço de manicure completo, incluindo esmaltação e cuidados com as unhas.',
      duracaoEmMinutos: 45,
      nomeProfissional: 'Maria Oliveira'
    },
    {
      id: 3,
      nome: 'Massagem Relaxante',
      descricao: 'Massagem relaxante para aliviar o estresse e promover o bem-estar.',
      duracaoEmMinutos: 60,
      nomeProfissional: 'Carlos Pereira'
    }
  ];
}
