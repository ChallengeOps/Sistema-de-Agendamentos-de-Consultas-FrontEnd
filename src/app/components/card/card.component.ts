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
      nome: 'Desenvolvimento de Software',
      descricao: 'Serviço de desenvolvimento de software personalizado para atender às necessidades do cliente.',
      duracaoEmMinutos: 30,
      nomeProfissional: 'João Silva'
    },
    {
      id: 2,
      nome: 'SAP',
      descricao: 'Serviço de consultoria SAP para otimização de processos empresariais.',
      duracaoEmMinutos: 45,
      nomeProfissional: 'Maria Oliveira'
    },
    {
      id: 3,
      nome: 'AI e Machine Learning',
      descricao: 'Serviço de implementação de soluções de inteligência artificial e aprendizado de máquina.',
      duracaoEmMinutos: 60,
      nomeProfissional: 'Carlos Pereira'
    }
  ];
}
