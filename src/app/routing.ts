//importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { from } from 'rxjs';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'registro', component: RegisterComponent },
    {path: '**', component:LoginComponent } //cuando no existe la ruta
];

//Exposrtar configiuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
