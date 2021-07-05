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
    email : ['', [Validators.required, Validators.email]]
  })

  showUp() {
    const element: any = document.querySelector('#about');
    element.scrollIntoView();
  }

  subNewsLetter() {
    this.submitted = true;
    this.contactInfo = this.userForm.value;
    if(this.userForm.valid){
      console.log(this.contactInfo)
      this.submitted=false;
}
    this.userForm.reset();
  }
  
}
