import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }


  onLogin(userName:string, password:string){
    if(userName === 'admin' && password === 'Admina') {
      localStorage.setItem('isLoggedIn', 'LoggedIn');
      return this.router.navigateByUrl('auth/AdminDashboard');
    } else{
      alert('Wrong Username or Password');
      return false;
      
    }

  }

   
}