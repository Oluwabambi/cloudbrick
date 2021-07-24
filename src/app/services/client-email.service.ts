import { Injectable } from '@angular/core';
import {environment as env} from '../../environments/environment';
import { ApiHandlerService } from './api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ClientEmailService {

  private postClientEmailURL = env.API_URL.ClientEmailService.clientEmail;
  private getClientEmailURL = env.API_URL.ClientEmailService.clientEmail;
  private deleteClientEmailURL = env.API_URL.ClientEmailService.clientEmail;

  constructor(private readonly apiService: ApiHandlerService) { }


  getClientEmail() {
    console.log(this.getClientEmailURL);
    return this.apiService.get(`${this.getClientEmailURL}`);
  } 
  postClientEmail(data: any) {
    console.log(this.postClientEmailURL);
    return this.apiService.post(`${this.postClientEmailURL}`, data);
  }
  deleteClientEmail(id:number){
    console.log(this.deleteClientEmailURL);
    return this.apiService.delete(`${this.deleteClientEmailURL}` +"/"+ id);
  }




}
