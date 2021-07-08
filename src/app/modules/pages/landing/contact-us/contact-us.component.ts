  
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm , Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
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
  // PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
  // isFormSubmitted = false;

  constructor(private router: Router,private http: HttpClient, private fb : FormBuilder, private client: ClientService) {}

  ngOnInit(): void {
    userForm :FormGroup;

    scrollTo(0,0);
    
  }

  goToAbout() {
    return this.router.navigate(['/home'],
     {state: {comingFrom: 'contact-us'}});
  }
 

  userForm = this.fb.group({
    name : new FormControl ('', Validators.required),
    email : new FormControl ('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    projectType : new FormControl ('', Validators.required),
    budget : new FormControl ('', Validators.required),
    message : new FormControl ('', Validators.required),
  });

  submitClient(data: any){
    
    console.log(data);
      this.client.postClients(data).subscribe(res => {
        console.log( res);
      }, err => {
        console.log(err);
      })
    Swal.fire('Submitted', '', 'success');
    this.userForm.reset();
    
  }


  


}
