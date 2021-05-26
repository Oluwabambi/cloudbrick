import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
  imports: [RouterModule.forRoot(routesApp),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
