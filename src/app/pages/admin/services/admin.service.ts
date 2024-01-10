import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly apiRoot: string = environment.apiBase;

  private dashboard = ApiData.adminDashboard;
  private users = ApiData.allUsers;
  private bikeOwners = ApiData.allBikeOwners;
  private updateStatus = ApiData.updateStatus;
  private userInfo = ApiData.userInfo;
  constructor(private http: HttpClient) { }

  getDashboard(){
    return this.http.get(`${this.apiRoot}/${this.dashboard}`);
  }

  getAllUserDetails(req: any):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.set('page', req.pageNumber); // You may want to convert to string here
    queryParams = queryParams.set('rows', req.pageSize); // You may want to convert to string here
    return this.http.get(`${this.apiRoot}/${this.users}`,{ params: queryParams, observe: 'response' });
  }

  getAllBikeOwners(req: any):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.set('page', req.pageNumber); // You may want to convert to string here
    queryParams = queryParams.set('rows', req.pageSize); // You may want to convert to string here
    return this.http.get(`${this.apiRoot}/${this.bikeOwners}`,{ params: queryParams, observe: 'response' });
  }

  updateSUsertatus(payload:any){
    return this.http.put(`${this.apiRoot}/${this.updateStatus}`,payload);
  }

  getUserInfo(id:any){
    return this.http.get(`${this.apiRoot}/${this.userInfo}/${id}`);
  }
}

