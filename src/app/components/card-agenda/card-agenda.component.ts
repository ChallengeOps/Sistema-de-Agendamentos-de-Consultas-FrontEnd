import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../../model/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-card-agenda',
  imports: [],
  templateUrl: './card-agenda.component.html',
  styleUrl: './card-agenda.component.css'
})
export class CardAgendaComponent implements OnInit{
  agenda: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService, ) {

  }

  ngOnInit(): void {
    
    this.agendamentoService.listarTodos().subscribe(
      (value) => {
      this.agenda = value;
      },
      (error) => {
      console.log(error)
      }
    )
    
  }

  remover(id: number): void {
    this.agendamentoService.deletarAgendamento(id).subscribe(
      () => {
        this.agenda = this.agenda.filter(agendamento => agendamento.id !== id);
        console.log(`Agendamento com ID ${id} removido com sucesso.`);
      },
      (error) => {
      console.log(error);
      }
    );
  }

}
