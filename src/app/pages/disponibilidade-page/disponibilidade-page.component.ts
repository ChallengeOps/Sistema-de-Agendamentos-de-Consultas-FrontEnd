import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardDisponibilidadeComponent } from "../../components/card-disponibilidade/card-disponibilidade.component";

@Component({
  selector: 'app-disponibilidade-page',
  imports: [HeaderComponent, CardDisponibilidadeComponent],
  templateUrl: './disponibilidade-page.component.html',
  styleUrl: './disponibilidade-page.component.css'
})
export class DisponibilidadePageComponent {

}
