import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { DashClienteComponent } from './pages/dash-cliente/dash-cliente.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cliente',
        component:DashClienteComponent
    }
];
