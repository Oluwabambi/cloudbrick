import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgForm , Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = '';

  submitted: any;
  contactInfo: any;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    userForm :FormGroup;
  }

  userForm = this.fb.group({
    email : ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
  })

  showUp() {
    const element: any = document.querySelector('#about');
    element.scrollIntoView();
  }

 subNewsLetter() {
    const x: any = document.getElementById('emailFalse');
    this.submitted = true;
    this.contactInfo = this.userForm.value;
    console.log(this.userForm.invalid);
    if(this.userForm.valid) {
      Swal.fire('Submitted', '', 'success');
      this.submitted = false;
      x.innerHTML = "Thanks for subscribing!";
      x.style.color = "#77eb34";
      setTimeout(() => { 
        x.innerHTML = "";
        this.submitted = false;
      }, 5000);
    }  
  }
  
}
