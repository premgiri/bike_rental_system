import { Component, OnInit } from '@angular/core';
import { BikeOwnerService } from '../../services/bike-owner.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent implements OnInit{
  public isViewBikeDetails:boolean = false
  public ownersBikesList:any[] = [];
  constructor(private bikeOwnerService:BikeOwnerService){}
  ngOnInit(): void {
    this.getAllOwnersBikesList();
  }

  getAllOwnersBikesList(){
    this.bikeOwnerService.getAllOwnersBikes().subscribe((response:any)=>{
      console.log(response);
      this.ownersBikesList = response;
    })
  }

  getBikeStatus(status:number):any{
    if(status===1){
      return 'Active';
    }
    if(status===2){
      return 'Inactive';
    }
    if(status===3){
      return 'Booked';
    }
  }
  getStatusColor(status:number):any{
    if(status===1){
      return '#87d068';
    }
    if(status===2){
      return '#f50';
    }
    if(status===3){
      return 'green';
    }
  }
}
