import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/landing/home/home.component';

const routesApp: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
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
