<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
>>>>>>> 9cd2afc77964acf2efbfbc2b0b66efbbb0dda000

const routesApp: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/pages/landing/landing.module').then(m => m.LandingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routesApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
