import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-past-rides',
  templateUrl: './past-rides.component.html',
  styleUrls: ['./past-rides.component.scss']
})
export class PastRidesComponent implements OnInit{
  isViewBikeDetails:boolean = false;
  constructor(private usersService:UserService){}
  ngOnInit(): void {
      this.getPreviousRides();
  }
  getPreviousRides(){
    this.usersService.getPreviousRides().subscribe((response:any)=>{
      console.log(response);
    })
  }

}
