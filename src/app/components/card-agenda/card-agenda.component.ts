import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../../model/agendamento';

@Component({
  selector: 'app-card-agenda',
  imports: [],
  templateUrl: './card-agenda.component.html',
  styleUrl: './card-agenda.component.css'
})
export class CardAgendaComponent implements OnInit{
  agenda: Agendamento[] = [
    {
      id: 1,
      nomeProfissional: 'Dr. João Silva',
      nomeServico: 'Consulta Médica',
      dateDisponibilidade: '2023-10-01T10:00:00',
      status: 'Agendado'
    },
    {
      id: 2,
      nomeProfissional: 'Dra. Maria Oliveira',
      nomeServico: 'Exame de Sangue',
      dateDisponibilidade: '2023-10-02T14:30:00',
      status: 'Pendente'
    },
    {
      id: 3,
      nomeProfissional: 'Dr. Carlos Pereira',
      nomeServico: 'Consulta Odontológica',
      dateDisponibilidade: '2023-10-03T09:00:00',
      status: 'Concluído'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    
  }

  remover(id: number): void {
    console.log(`Agendamento com ID ${id} removido.`);
  }

}
