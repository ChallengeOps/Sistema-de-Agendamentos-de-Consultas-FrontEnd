import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { DashClienteComponent } from './pages/dash-cliente/dash-cliente.component';
import { RegisterComponent } from './pages/register/register.component';
import { MinhaAgendaComponent } from './pages/minha-agenda/minha-agenda.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ServicosPageComponent } from './pages/servicos-page/servicos-page.component';
import { DisponibilidadePageComponent } from './pages/disponibilidade-page/disponibilidade-page.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cliente',
        component:DashClienteComponent,
        data: { role: 'CLIENTE' },
        canActivate: [AuthGuardService]
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
  path: 'agenda',
  component: MinhaAgendaComponent,
  data: { role: ['CLIENTE', 'PROFISSIONAL'] },  // agora é array
  canActivate: [AuthGuardService]
},

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'servicos',
        component: ServicosPageComponent,
        data: {role:  'PROFISSIONAL' },
        canActivate: [AuthGuardService]
    },
    {
        path:'disponibilidade',
        component:DisponibilidadePageComponent,
        data: {role: [ 'PROFISSIONAL'] },
        canActivate: [AuthGuardService]
    }
];
