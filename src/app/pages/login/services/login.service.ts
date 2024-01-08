import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private firebaseLoginAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdctFxPpleBmE2I4jNGt4pe-slEIk62Nc'
  constructor(private http: HttpClient) { }
  loginwithFirebase(loginDetails:any){
    return this.http.post(this.firebaseLoginAPI,loginDetails)
  }
}
