import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-past-rides',
  templateUrl: './past-rides.component.html',
  styleUrls: ['./past-rides.component.scss']
})
export class PastRidesComponent implements OnInit{
  isViewBikeDetails:boolean = false;
  public rideDetails:any[] = [];
  constructor(private usersService:UserService){}
  ngOnInit(): void {
      this.getPreviousRides();
  }
  getPreviousRides(){
    this.usersService.getPreviousRides().subscribe((response:any)=>{
      console.log(response);
      this.rideDetails = response;
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
