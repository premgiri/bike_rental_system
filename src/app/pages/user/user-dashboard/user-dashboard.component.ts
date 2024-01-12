import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit{
  public isVisible:boolean = false;
  public isViewBikeDetails:boolean = false;
  public totalAmountSpent:number = 0;
  public totalRidesCompleted:number = 0;
  public searchBikeKeyword:string = '';
  public searchedBikeList:any[] = [];
  public bikeDetails:any;
  public dateFormat:string = 'yyyy-MM-dd HH:mm';
  public selectedDateRangeForm:FormGroup = new FormGroup({});
  public days:number = 0;
  public totalFare:number = 0;
  private startDate:any;
  private endDate:any;
  
  constructor(private userService: UserService, private message: NzMessageService, private fb:FormBuilder){
    this.selectedDateRangeForm= this.fb.group({
      dateRange: new FormControl([])
    })
  }
  ngOnInit(): void {
    this.getAllBikes();
    this.getUserDashboard();
  }

  getUserDashboard(){
    this.userService.getDashbooard().subscribe((response:any)=>{
      console.log(response);
      this.totalAmountSpent = response.amount_spent;
      this.totalRidesCompleted = response.completed_rides_count;
    })
  }
  showModal(id:any): void {
    this.userService.getBikeDetails(id).subscribe((response:any)=>{
      this.bikeDetails = response.bike_details;
    })
    this.isVisible = true;
  }

  handleOk(): void {
    const payload = {
      customer_id: Number(localStorage.getItem('id')),
      bike_owner_id: Number(this.bikeDetails.owner_id),
      bike_id: Number(this.bikeDetails.id),
      ride_start_date: this.startDate.toISOString(),
      ride_end_date: this.endDate.toISOString(),
      days: Number(this.days),
      amount_earned: Number(this.totalFare)
    }
    this.isVisible = false;
    this.userService.book(payload).subscribe((response:any)=>{
      if(response.message){
        this.message.success(response.message);
      }
      console.log(response);
    })
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getAllBikes(){
    this.userService.getAllBikes().subscribe((response:any)=>{
      this.searchedBikeList = response;
    })
  }
  onGetSearchedBikes(){
    this.userService.getSearchedBikes(this.searchBikeKeyword).subscribe((response:any)=>{
      console.log(response);
      if(response.length > 0){
        this.searchedBikeList = response;
        this.message.success(response.length+' '+'bikes found');
        this.searchBikeKeyword = '';
      }else if(response.length === 0){
        this.searchedBikeList = [];
        this.searchBikeKeyword = '';
        this.message.error('No bikes found')
      }
    })
  }
  onDateSelected(dates:any){
    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[1]);
    this.startDate = startDate;
    this.endDate = endDate;

    // Check if the start and end dates are the same
    if (startDate.toDateString() === endDate.toDateString()) {
        this.days = 1;
    } else {
        // Calculate the time difference in milliseconds
        const dateRange = endDate.getTime() - startDate.getTime();

        // Convert the time difference to hours
        const remainingHours = dateRange / (1000 * 3600);

        // Always round up to the next whole day
        const remainingDays = Math.ceil(remainingHours / 24);

        this.days = remainingDays;
    }

    this.totalFare = this.bikeDetails.fare_per_day * this.days;
  }

  onOk(date:any){
    console.log(date);
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
