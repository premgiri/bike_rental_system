import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class BikeOwnerService {
  private readonly apiRoot: string = environment.apiBase;

  private dashboard = ApiData.bikeOwnerDashoard;
  constructor(private http: HttpClient) { }

  getDashboard(){
    return this.http.get(`${this.apiRoot}/${this.dashboard}`);
  }
}
