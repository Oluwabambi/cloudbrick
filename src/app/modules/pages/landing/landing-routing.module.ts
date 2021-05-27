import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing.component';
import {ServicesComponent} from './services/services.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
=======
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
>>>>>>> 9cd2afc77964acf2efbfbc2b0b66efbbb0dda000

const routes: Routes = [{
  path:'',
  component: LandingComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contact-us', component: ContactUsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes),NgbPaginationModule, NgbAlertModule],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
