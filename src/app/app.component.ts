import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashClienteComponent } from './pages/dash-cliente/dash-cliente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SistemaDeConsultas';
}
