  
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // for navbar collapse
  isShown = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAbout() {
    return this.router.navigate(['/home'],
     {state: {comingFrom: 'contact-us'}});
  }
  client: Clients = {
    name: '',
    email: '',
    projectType: "Project Type",
    budget: 1,
    message: '',
  };

  submitClient(clientForm:NgForm):void{
    alert("Submitted");
    // console.log(clientForm.value);
  }

}

export class Clients {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: number;
  message?: string;
}