import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiRoot: string = environment.apiBase;

  private firebaseLoginAPI = ApiData.firebaseLoginAPI;
  constructor(private http: HttpClient) { }
  loginwithFirebase(loginDetails:any){
    return this.http.post(this.firebaseLoginAPI,loginDetails)
  }
}
