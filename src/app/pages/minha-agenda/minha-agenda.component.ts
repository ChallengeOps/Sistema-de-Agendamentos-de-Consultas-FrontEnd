import { Component } from '@angular/core';
import { Agendamento } from '../../model/agendamento';
import { CardAgendaComponent } from "../../components/card-agenda/card-agenda.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-minha-agenda',
  imports: [CardAgendaComponent, HeaderComponent],
  templateUrl: './minha-agenda.component.html',
  styleUrl: './minha-agenda.component.css'
})
export class MinhaAgendaComponent {


}
