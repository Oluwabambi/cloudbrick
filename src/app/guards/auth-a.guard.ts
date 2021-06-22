import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAGuard implements CanActivate {
 
  constructor(private router: Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      
      if(localStorage.getItem('username')!== null){
        return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
  }
  
}
