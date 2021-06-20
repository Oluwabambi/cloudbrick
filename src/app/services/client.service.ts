import { Injectable } from '@angular/core';
import {environment as env} from '../../environments/environment';
import { ApiHandlerService } from './api-handler.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private getClientsURL = env.API_URL.ClientService.clients;
  
  
  constructor(private readonly apiService: ApiHandlerService) { }

  getClients() {
    console.log(this.getClientsURL);
    return this.apiService.get(`${this.getClientsURL}`);
  }

}
