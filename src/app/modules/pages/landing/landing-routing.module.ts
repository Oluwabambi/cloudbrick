import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing.component';
import {ServicesComponent} from './services/services.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contact-us', component: ContactUsComponent},
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
