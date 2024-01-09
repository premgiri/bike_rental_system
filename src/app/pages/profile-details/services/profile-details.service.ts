import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  private readonly apiRoot: string = environment.apiBase;

  private changePassword = ApiData.changePassword;
  constructor(private http: HttpClient) { }

  passwordChange(passwordDetails:any){
    return this.http.post(`${this.apiRoot}/${this.changePassword}`,passwordDetails);
  }
}
