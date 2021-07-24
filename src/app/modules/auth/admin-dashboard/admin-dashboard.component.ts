import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientEmailService } from 'src/app/services/client-email.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  allUsers:Array<any> = [];
  allEmails:Array<any> = [];
  
  constructor(private http: HttpClient, private client: ClientService,private clientEmail: ClientEmailService, private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') !== 'LoggedIn') {
      this.router.navigateByUrl('auth/login')
    } else {
          this.getClients();
          this.getClientEmail();
          
    }   
  }

  onLogOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();
    return this.router.navigateByUrl('auth/login')
  }
  //details for Clients
  getClients() {
    this.client.getClients().subscribe(res => {    
      this.allUsers = res;
    }, err => {
      console.log(err);
    })
  }
 deleteClients(id:any) {
   if(confirm("Are you sure you want to delete?")){
    this.client.deleteClients(id).subscribe(() => {
      this.getClients();
    })
  }
  }

  //details for client emails
  getClientEmail() {
    this.clientEmail.getClientEmail().subscribe(res => {    
      this.allEmails = res;
    }, err => {
      console.log(err);
    })
  }
  deleteClientEmail(id:any) {
    if(confirm("Are you sure you want to delete?")){
     this.clientEmail.deleteClientEmail(id).subscribe(() => {
       this.getClientEmail(); 
     })
   }
}
}