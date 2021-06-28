import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  allUsers:Array<any> = [];
  
  constructor(private http: HttpClient, private client: ClientService, private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') !== 'LoggedIn') {
      this.router.navigateByUrl('auth/login')
    } else {
          this.getClients();

    }    
  }

  onLogOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();
    return this.router.navigateByUrl('auth/login')
  }

  getClients() {
    this.client.getClients().subscribe(res => {
      console.log(res);
      this.allUsers = res;
    }, err => {
      console.log(err);

    })
  }

}
