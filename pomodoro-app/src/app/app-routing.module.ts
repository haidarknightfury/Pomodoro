import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {PomodoroComponent} from './pomodoro/pomodoro/pomodoro.component';
import { SettingsComponent } from './pomodoro/settings/settings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'pomodoro', component: PomodoroComponent, pathMatch: 'full'},
  { path: 'settings', component: SettingsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
