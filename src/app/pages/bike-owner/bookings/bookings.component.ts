import { Component, OnInit } from '@angular/core';
import { BikeOwnerService } from '../services/bike-owner.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit{
  isViewBikeDetails:boolean = false;
  constructor(private bikeOwnerService:BikeOwnerService){}
  ngOnInit(): void {
    this.getBikeOwnerBookings();
  }
  getBikeOwnerBookings(){
    this.bikeOwnerService.getOwnerBookings().subscribe((response:any)=>{
      console.log(response);
    })
  }
}
