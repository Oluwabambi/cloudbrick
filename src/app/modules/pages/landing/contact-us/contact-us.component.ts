  
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm , Validators, FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 
  isShown = false;
  projects : any =["Web Application", "Mobile Application", "Mobile Marketing", "Internet/Web Marketing"];
  budgets : any =['$10,000-30,000', '$40,000-60,000', '$60,000-100,000'];

  constructor(private router: Router,private http: HttpClient, private fb : FormBuilder, private client: ClientService) {}

  ngOnInit(): void {
    
  }

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

  submitClient(data: any){
    console.log(data);
      this.client.postClients(data).subscribe(res => {
        console.log("res", res);
      }, err => {
        console.log(err);
      })
    Swal.fire('Submitted', '', 'success');
    this.userForm.reset();
    
  }

  


}
