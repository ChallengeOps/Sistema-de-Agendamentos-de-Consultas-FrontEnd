import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servico } from '../../model/servico';
import { Disponibilidade } from '../../model/disponibilidade';
import { CommonModule } from '@angular/common';
import { agendar } from '../../model/agendar';
import { DisponibilidadeService } from '../../services/disponibilidade.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { Agendamento } from '../../model/agendamento';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-info',
  imports: [CommonModule],
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.css'
})
export class ModalInfoComponent implements OnInit {
  @Input() item!: Servico;
  @Output() closed = new EventEmitter<void>();

  disponibilidades: Disponibilidade[] =[];

  constructor (private service: DisponibilidadeService, private agendamentoService: AgendamentoService, private toastservice: ToastrService) { 
    // Inicialização do componente

  }

 ngOnInit(): void {
  this.service.getDisponibilidades(this.item.id).subscribe(
    (disponibilidades: any) => {
      if (Array.isArray(disponibilidades)) {
        this.disponibilidades = disponibilidades;
      } else {
        this.disponibilidades = [disponibilidades];
      }
    },
    (error) => {
      console.error('Erro ao carregar disponibilidades:', error);
    }
  );
}


  close() {
    this.closed.emit();
  }

  horarioSelecionado?: Disponibilidade;

  selecionarHorario(disponibilidade: Disponibilidade) {
    this.horarioSelecionado = disponibilidade;
    this.toastservice.info('Horário selecionado:', disponibilidade.descricaoDate);
  }

  agendar(): void {
    if (!this.horarioSelecionado) {
      this.toastservice.error('Por favor, selecione um horário para agendar.');
      return;
    }

    const agendamento: agendar = {
      servicoId: this.item.id,  
      disponibilidadeId: this.horarioSelecionado.disponibilidadeId
    };

    this.agendamentoService.agendar(agendamento).subscribe(
      response => {
        console.log('Agendamento realizado com sucesso:', response);
        this.toastservice.success('Agendamento realizado com sucesso!');
      },
      error => {  
        console.error('Erro ao realizar agendamento:', error);
        this.toastservice.error('Erro ao realizar agendamento. Por favor, tente novamente mais tarde.');
      }

    );
    this.closed.emit();
  }

}