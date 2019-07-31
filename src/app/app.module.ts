import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from '../app/routing';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { MomentModule } from 'angular2-moment';

import { PanelModule } from './panel/panel-module'
//Services
import { UserService } from './services/user.service'
import { UserGuard } from './services/user.guard'
import { NoIdentityGuard } from './services/no.identity.guard'

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicsDetailComponent } from './components/topics-detail/topics-detail.component';

import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
    TopicsComponent,
    TopicsDetailComponent,
    UsersComponent,
    ProfileComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AngularFileUploaderModule,
    PanelModule,
    MomentModule,
    NgxHighlightJsModule,
    NgxHighlightJsModule.forRoot()
  ],
  providers: [ 
    appRoutingProviders, UserGuard, UserService, NoIdentityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
