import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiRoot: string = environment.apiBase;

  private dashboard = ApiData.userDashboard;
  private pastRides =  ApiData.pastRides;
  private currentBookings = ApiData.currentBookings;
  private searchBikes = ApiData.searchUserBikes;
  private bikeDetails = ApiData.bikeDetails;
  private bookRide = ApiData.bookRide;
  private acceptRejectRide = ApiData.acceptOrRejectRide;

  constructor(private http: HttpClient) { }

  getDashbooard(){
    return this.http.get(`${this.apiRoot}/${this.dashboard}`);
  }
  
  getPreviousRides(){
    return this.http.get(`${this.apiRoot}/${this.pastRides}`);
  }

  getCurrentBookings(){
    return this.http.get(`${this.apiRoot}/${this.currentBookings}`);
  }

  getSearchedBikes(searchedKey:any){
    const queryParams = new HttpParams().set('search_key', searchedKey);
  const options = { params: queryParams };
    return this.http.post(`${this.apiRoot}/${this.searchBikes}`, {}, options);
  }

  getBikeDetails(id:any){
    return this.http.get(`${this.apiRoot}/${this.bikeDetails}/${id}`);
  }

  book(rideDetails:any){
    return this.http.post(`${this.apiRoot}/${this.bookRide}`,rideDetails);
  }

  getAllBikes(){
    return this.http.post(`${this.apiRoot}/${this.searchBikes}`,'');
  }

  acceptOrRejectRide(rideDetails:any){
    return this.http.post(`${this.apiRoot}/${this.acceptRejectRide}`,rideDetails);
  }
}
