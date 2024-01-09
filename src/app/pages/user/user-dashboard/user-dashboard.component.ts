import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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
  constructor(private userService: UserService){}
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
}
