import { Component, OnInit } from '@angular/core';
import { BikeOwnerService } from '../services/bike-owner.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit{
  isViewBikeDetails:boolean = false;
  public bookingDetails:any[] = [];
  visible = false;
  childrenVisible = false;
  public bikeDetails:any;
  constructor(private bikeOwnerService:BikeOwnerService,private message:NzMessageService){}
  ngOnInit(): void {
    this.getBikeOwnerBookings();
  }
  getBikeOwnerBookings(){
    this.bikeOwnerService.getOwnerBookings().subscribe((response:any)=>{
      console.log(response);
      this.bookingDetails = response;
    })
  }
  openDetails(bookingDetails:any){
    this.visible = true;
    console.log(bookingDetails);
    this.bikeDetails = bookingDetails;
  }
  closeDetails(): void {
    this.visible = false;
  }
  closeChildren(): void {
    this.childrenVisible = false;
  }
  onAcceptOrRejectRide(rideId:any,rideStatus:string){
    const payload =  {
      id: rideId,
      status: rideStatus
    }
    this.bikeOwnerService.acceptOrRejectRide(payload).subscribe((response:any)=>{
      if(response.message){
        this.message.success(response.message);
      }
    })
  }
}
