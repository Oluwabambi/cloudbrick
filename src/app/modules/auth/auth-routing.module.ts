import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {LoginComponent} from './login/login.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AuthAGuard } from 'src/app/guards/auth-a.guard';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {path: 'login', component: LoginComponent},
    {path: 'AdminDashboard',
     component: AdminDashboardComponent, 
     canActivate:[AuthAGuard]},


  ]
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
