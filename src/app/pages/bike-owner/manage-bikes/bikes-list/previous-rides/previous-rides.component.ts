import { Component, OnInit } from '@angular/core';
import { BikeOwnerService } from '../../../services/bike-owner.service';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-previous-rides',
  templateUrl: './previous-rides.component.html',
  styleUrls: ['./previous-rides.component.scss']
})
export class PreviousRidesComponent implements OnInit{
  public isViewBikeDetails:boolean = false;
  public bikeDetails:any[] = [];
  public selectedBikeDetails:any;

  visible = false;
  childrenVisible = false;
  constructor(private bikeOwnerService:BikeOwnerService, private route:ActivatedRoute, private message:NzMessageService){}
  ngOnInit(): void {
    this.onGetPreviousRides();
  }
  onGetPreviousRides(){
    const id = this.route.snapshot.paramMap.get('id');
    this.bikeOwnerService.getPreviousRides(id).subscribe((response:any)=>{
      this.bikeDetails = response;
    });
  }
  onAcceptOrRejectRide(rideId:any,rideStatus:string){
    const payload =  {
      id: rideId,
      status: rideStatus
    }
    this.bikeOwnerService.acceptOrRejectRide(payload).subscribe((response:any)=>{
      if(response.message){
        this.message.success(response.message);
        this.onGetPreviousRides();
      }
    })
  }
}
