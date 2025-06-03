import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Servico } from '../../model/servico';
import { Disponibilidade } from '../../model/disponibilidade';
import { CommonModule } from '@angular/common';
import { agendar } from '../../model/agendar';

@Component({
  selector: 'app-modal-info',
  imports: [CommonModule],
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.css'
})
export class ModalInfoComponent {
  @Input() item!: Servico;
  @Output() closed = new EventEmitter<void>();

  disponibilidades: Disponibilidade[] = [
    {
      id: 1,
      descricao: "02/06/2025 (Segunda-feira) - 08:00 às 12:00"
    },
    {
      id: 2,
      descricao: "02/06/2025 (Segunda-feira) - 14:00 às 18:00"
    },
    {
      id: 3,
      descricao: "03/06/2025 (Terça-feira) - 08:00 às 12:00"
    },
    {
      id: 4,
      descricao: "03/06/2025 (Terça-feira) - 14:00 às 18:00"
    },
    {
      id: 5,
      descricao: "04/06/2025 (Quarta-feira) - 08:00 às 12:00"
    },
    {
      id: 6,
      descricao: "04/06/2025 (Quarta-feira) - 14:00 às 18:00"
    }
  ];

  close() {
    this.closed.emit();
  }

  horarioSelecionado?: Disponibilidade;

  selecionarHorario(disponibilidade: Disponibilidade) {
    this.horarioSelecionado = disponibilidade;
    console.log('Horário selecionado:', disponibilidade);
  }

  agendar(): void {
    if (!this.horarioSelecionado) {
      alert('Por favor, selecione um horário para agendar.');
      return;
    }

    const agendamento = {
      servicoId: this.item.id,  
      disponibilidadeId: this.horarioSelecionado.id
    };

    // Aqui você pode chamar seu backend para enviar o agendamento
    // ex: this.agendamentoService.agendar(agendamento).subscribe(...)

    console.log('Agendamento enviado:', agendamento);

    this.closed.emit();
  }

}
