import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ServicesComponent,
    ContactUsComponent,
    HeaderComponent
  ],
  
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
  ]
})
export class LandingModule { }
