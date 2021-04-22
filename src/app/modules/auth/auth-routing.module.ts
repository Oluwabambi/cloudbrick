import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routesApp: Routes = [];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesApp)],
})
export class AuthRoutingModule { }
