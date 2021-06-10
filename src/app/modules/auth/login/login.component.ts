import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Login: ILogin =  new ILogin();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.Login.userName === 'admin' && this.Login.pass === 'Admina'){
      this.router.navigateByUrl('auth/AdminDashboard');
    }else {
      alert('Wrong Username or Password');
      
    }
  }
   
}

export class ILogin{
  "userName": string;
  "pass": string;

}
