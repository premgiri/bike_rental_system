import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-current-bookings',
  templateUrl: './current-bookings.component.html',
  styleUrls: ['./current-bookings.component.scss']
})
export class CurrentBookingsComponent implements OnInit{
  isVisible = false;
  isViewBikeDetails:boolean = false;
  public bookingDetails:any[] =[];
  private rideId:number = 0;
  private rideStatus:string = '';
  constructor(private usersService:UserService, private message: NzMessageService){}
  ngOnInit(): void {
    this.getCurrentBookings();
}
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(rideId:any,rideStatus:string): void {
    this.onAcceptOrRejectRide(rideId,rideStatus);
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getCurrentBookings(){
    this.usersService.getCurrentBookings().subscribe((response:any)=>{
      this.bookingDetails = response;
      console.log(response);
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
  onAcceptOrRejectRide(rideId:any,rideStatus:string){
    const payload =  {
      id: rideId,
      status: rideStatus
    }
    this.usersService.acceptOrRejectRide(payload).subscribe((response:any)=>{
      if(response.message){
        this.message.success(response.message);
      }
    })
  }
}
