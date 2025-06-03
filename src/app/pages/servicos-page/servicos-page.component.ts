import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CardServicoComponent } from "../../components/card-servico/card-servico.component";

@Component({
  selector: 'app-servicos-page',
  imports: [ HeaderComponent, CardServicoComponent],
  templateUrl: './servicos-page.component.html',
  styleUrl: './servicos-page.component.css'
})
export class ServicosPageComponent {
}
