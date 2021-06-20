import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAdminService {

  constructor() { }
  
  onLogin(uName:string, pwd:string){
    if(uName === 'admin' && pwd === 'Admina'){
      localStorage.setItem('username', "admin");
      return true;
    }else{
      return false;
    }

  }

}
