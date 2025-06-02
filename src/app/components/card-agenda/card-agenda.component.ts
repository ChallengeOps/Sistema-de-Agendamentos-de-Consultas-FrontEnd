import { Component } from '@angular/core';
import { Agendamento } from '../../model/agendamento';

@Component({
  selector: 'app-card-agenda',
  imports: [],
  templateUrl: './card-agenda.component.html',
  styleUrl: './card-agenda.component.css'
})
export class CardAgendaComponent {
  agenda: Agendamento[] = [
    {
      id: 1,
      clienteNome: 'João Silva',
      profissionalNome: 'Maria Oliveira',
      servicoNome: 'Corte de Cabelo',
      status: 'Confirmado',
      horaInicio: '2025-06-02T19:00:00',
      horaFim: '2025-06-02T20:00:00'
    },
    {
      id: 2,
      clienteNome: 'Ana Souza',
      profissionalNome: 'Carlos Pereira',
      servicoNome: 'Manicure',
      status: 'Pendente',
      horaInicio: '2025-06-03T10:00:00',
      horaFim: '2025-06-03T11:00:00'
    },
    {
      id: 3,
      clienteNome: 'Pedro Santos',
      profissionalNome: 'Fernanda Lima',
      servicoNome: 'Massagem Relaxante',
      status: 'Cancelado',
      horaInicio: '2025-06-04T15:00:00',
      horaFim: '2025-06-04T16:00:00'
    }
  ];

}
