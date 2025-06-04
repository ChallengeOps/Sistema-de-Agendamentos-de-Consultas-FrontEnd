import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-dash-cliente',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './dash-cliente.component.html',
  styleUrl: './dash-cliente.component.css'
})
export class DashClienteComponent {

}
