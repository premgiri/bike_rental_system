import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/shared/apis';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class BikeOwnerService {
  private readonly apiRoot: string = environment.apiBase;

  private dashboard = ApiData.bikeOwnerDashoard;
  private bikesList = ApiData.ownersBikesList;
  private addnewBike = ApiData.addBikes;
  private ownerBookings = ApiData.ownerBookings;
  private acceptRejectRide = ApiData.acceptOrRejectRide;
  private previousRides = ApiData.previousRides;
  private bikeDetails = ApiData.bikeDetails;

  constructor(private http: HttpClient) { }

  getDashboard(){
    return this.http.get(`${this.apiRoot}/${this.dashboard}`);
  }

  getAllOwnersBikes(){
    return this.http.get(`${this.apiRoot}/${this.bikesList}`);
  }

  addBike(bikeDetails:any){
    return this.http.post(`${this.apiRoot}/${this.addnewBike}`,bikeDetails);
  }

  getOwnerBookings(){
    return this.http.get(`${this.apiRoot}/${this.ownerBookings}`);
  }

  acceptOrRejectRide(rideDetails:any){
    return this.http.post(`${this.apiRoot}/${this.acceptRejectRide}`,rideDetails);
  }

  getPreviousRides(bikeId:any){
    return this.http.get(`${this.apiRoot}/${this.previousRides}/${bikeId}`);
  }

  getBikeDetails(id:any){
    return this.http.get(`${this.apiRoot}/${this.bikeDetails}/${id}`);
  }
}
