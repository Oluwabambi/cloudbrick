import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MyAdminService } from 'src/app/services/my-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private router: Router , private service : MyAdminService) { }

  ngOnInit(): void {
  }

  onLogin(userName:string, pass:string){
    const output = this.service.onLogin(userName , pass);
    if(output === true){
      this.router.navigateByUrl('auth/AdminDashboard');
    }else {
      alert('Wrong Username or Password');
      
    }
  }
   
}