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
  private userInfo = ApiData.userInfo;
  private changeProfileDetails = ApiData.changesProfileDetails;

  constructor(private http: HttpClient) { }

  passwordChange(passwordDetails:any){
    return this.http.post(`${this.apiRoot}/${this.changePassword}`,passwordDetails);
  }
  getUserInfo(id:any){
    return this.http.get(`${this.apiRoot}/${this.userInfo}/${id}`);
  }
  changeProfile(profileDetails:any){
    return this.http.put(`${this.apiRoot}/${this.changeProfileDetails}`,profileDetails);
  }
}
