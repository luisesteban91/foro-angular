//importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './services/user.guard'
import { NoIdentityGuard } from './services/no.identity.guard'

//importar componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicsDetailComponent } from './components/topics-detail/topics-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'login', canActivate: [NoIdentityGuard], component: LoginComponent },
    {path: 'registro', canActivate: [NoIdentityGuard], component: RegisterComponent },
    {path: 'ajustes', canActivate: [UserGuard], component: UserEditComponent},
    {path: 'temas', component: TopicsComponent},
    {path: 'temas/:page', component: TopicsComponent},
    {path: 'tema/:id', component: TopicsDetailComponent},
    {path: 'usuarios', component: UsersComponent},
    {path: 'perfil/:id', component: ProfileComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: '**', component:HomeComponent } //cuando no existe la ruta
];

//Exposrtar configiuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
