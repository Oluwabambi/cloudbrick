import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgForm , Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ClientEmailService } from 'src/app/services/client-email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = '';
  submitted: any;
  contactInfo: any;

  constructor(private fb : FormBuilder,private clientEmail: ClientEmailService) { }

  ngOnInit(): void {

  }

  emailForm = this.fb.group({
    email : ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
  })

  //Scroll to About
  showUp() {
    const element: any = document.querySelector('#about');
    element.scrollIntoView();
  }

  //newsletter
 subNewsLetter(data:any) {
    const x: any = document.getElementById('emailFalse');
    this.submitted = true;
    this.contactInfo = this.emailForm.value;
    console.log(this.emailForm.invalid);
    if(this.emailForm.valid) {
       //console.log(data);
       this.clientEmail.postClientEmail(data).subscribe(res => {
        console.log( res);
      }, err => {
        //console.log(err);
      })
      //Sweetalert
      Swal.fire('Submitted', '', 'success');
      this.submitted = false;
      x.innerHTML = "Thanks for subscribing!";
      x.style.color = "#77eb34";
        setTimeout(() => { 
          x.innerHTML = "";
          this.submitted = false;
        }, 5000);
        this.emailForm.reset();
    }  
  }
  
}
