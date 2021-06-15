  
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NgForm , Validators, FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 
  isShown = false;
  projects : any =["Web Application", "Mobile Application", "Mobile Marketing", "Internet/Web Marketing"];
  budgets : any =['$10,000-30,000', '$40,000-60,000', '$60,000-100,000'];

  constructor(private router: Router, private fb : FormBuilder) {}

  ngOnInit(): void {}

  goToAbout() {
    return this.router.navigate(['/home'],
     {state: {comingFrom: 'contact-us'}});
  }
 

  userForm = this.fb.group({
    name : ['', Validators.required],
    email : ['', Validators.required],
    projectType : ['', Validators.required],
    budget : ['', Validators.required],
    message : ['', Validators.required],
  });

  submitClient(){
    Swal.fire('Submitted', '', 'success');
    this.userForm.reset();
  }

}
