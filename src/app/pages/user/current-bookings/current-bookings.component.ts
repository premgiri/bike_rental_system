import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-current-bookings',
  templateUrl: './current-bookings.component.html',
  styleUrls: ['./current-bookings.component.scss']
})
export class CurrentBookingsComponent implements OnInit{
  isVisible = false;
  isViewBikeDetails:boolean = false;
  constructor(private usersService:UserService){}
  ngOnInit(): void {
    this.getCurrentBookings();
}
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getCurrentBookings(){
    this.usersService.getCurrentBookings().subscribe((response:any)=>{
      console.log(response);
    })
  }
}
