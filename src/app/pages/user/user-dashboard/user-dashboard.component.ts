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
  public dateFormat:string = 'yyyy-MM-dd';
  public selectedDateRangeForm:FormGroup = new FormGroup({});
  
  constructor(private userService: UserService, private message: NzMessageService, private fb:FormBuilder){
    this.selectedDateRangeForm= this.fb.group({
      dateRange: new FormControl([])
    })
  }
  ngOnInit(): void {
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
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  onGetSearchedBikes(){
    this.userService.getSearchedBikes(this.searchBikeKeyword).subscribe((response:any)=>{
      console.log(response);
      if(response.length > 0){
        this.searchedBikeList = response;
        this.message.success(response.length+' '+'bikes found');
      }else if(response.length === 0){
        this.message.error('No bikes found')
      }
    })
  }
  onDateSelected(){
    const form = this.selectedDateRangeForm.value;
    console.log(this.selectedDateRangeForm.controls['dateRange'].value);
    form.dateRange.forEach((date:any,i:any) => {
      let startDate:any;
      let endDate:any;
      if(date[i]===0){
        startDate = new Date(date[i]);
      }
      if(date[i]===1){
        endDate = new Date(date[i]);
      }
      const oneDay = 24 * 60 * 60 * 1000;
      const remainingDays = Math.round(Math.abs((startDate - endDate) / oneDay));
      console.log(remainingDays);
    });
  }
}
