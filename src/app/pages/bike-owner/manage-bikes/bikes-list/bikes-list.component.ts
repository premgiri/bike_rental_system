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
}
