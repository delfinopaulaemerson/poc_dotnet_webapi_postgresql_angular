import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component'
import {LoginComponent} from './components/login-component/login-component'
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { AlunoComponent } from './components/aluno-component/aluno-component';
import { ProducerComponent } from './components/producer-component/producer-component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'aluno',
        component: AlunoComponent
    }, {
        path: 'producer',
        component: ProducerComponent
    }
];
