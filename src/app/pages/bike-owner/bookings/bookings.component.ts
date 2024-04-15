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
  onAcceptOrRejectOnGoingRide(rideId:any,rideStatus:string){
    const payload =  {
      id: rideId,
      status: rideStatus
    }
    this.bikeOwnerService.acceptOrRejectRide(payload).subscribe((response:any)=>{
      if(response.message){
        this.message.success(response.message);
        this.getBikeOwnerBookings();
      }
    })
  }
  getRideStatusColor(status:string):any{
    if(status==='Requested'){
      return '#f50';
    }
    if(status==='Accepted'){
      return '#87d068';
    }
    if(status==='Completed'){
      return 'green';
    }
    if(status==='Cancelled'){
      return 'grey';
    }
  }
}
