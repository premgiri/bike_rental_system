import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private readonly apiRoot: string = environment.apiBase;
  private roles = ApiData.allRoles;
  private registerUser = ApiData.registration;


  constructor(private http: HttpClient) { }

  allRoles(){
    return this.http.get(`${this.apiRoot}/${this.roles}`);
  }

  register(registrationDetails:any){
    return this.http.post(`${this.apiRoot}/${this.registerUser}`, registrationDetails);
  }
}
