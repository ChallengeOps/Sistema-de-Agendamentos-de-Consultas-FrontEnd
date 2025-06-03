import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { DashClienteComponent } from './pages/dash-cliente/dash-cliente.component';
import { RegisterComponent } from './pages/register/register.component';
import { MinhaAgendaComponent } from './pages/minha-agenda/minha-agenda.component';
import { AuthGuardService } from './services/auth-guard.service';

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
        component: MinhaAgendaComponent
    },{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
