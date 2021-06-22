import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  allUsers = [];
  // users = this.http.get('https://60be1bebc622c100177fcd2b.mockapi.io/clients/');
  constructor(private http: HttpClient, private client: ClientService) { }

  ngOnInit(): void {
    this.getClients();
    
    
    // this.users.subscribe((data)=>{
    //   console.log("get api", data);
    //   this.name= data['name'];
    // })
    
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
