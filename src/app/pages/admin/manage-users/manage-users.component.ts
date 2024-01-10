import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit{
  public isVisible:boolean = false;
  public selectedValue:string = '';
  private selectedUserId:number = 0;
  public userDetails:any;
  public usersList:any[] = [];
  itemsPerPage = 10;
  totalItems = 0;
  page = 1;

  constructor(private adminService: AdminService, private message:NzMessageService){}
  ngOnInit(): void {
      this.getAllUsers();
  }
  listOfColumn = [
    {
      title: 'First Name',
      priority: false
    },
    {
      title: 'Last Name',
      priority: 3
    },
    {
      title: 'Middle Name',
      priority: 3
    },
    {
      title: 'Email',
      priority: 2
    },
    {
      title: 'Phone Number',
      priority: 1
    },
    {
      title: 'Date Of Birth',
      priority: 1
    },
    {
      title: 'Status',
      priority: 1
    },
    {
      title: 'Actions',
      priority: 1
    }
  ];
  
  showModal(id:any): void {
    this.selectedUserId = id;
    this.adminService.getUserInfo(id).subscribe((response:any)=>{
      this.userDetails = response;
      this.selectedValue = response.status;
      console.log(response);
    })
    this.isVisible = true;
  }

  handleOk(): void {
    const payload = {
      id:this.selectedUserId,
      status: this.selectedValue
    }
    this.adminService.updateSUsertatus(payload).subscribe((response:any)=>{
      this.message.create('success',response.message);
      this.isVisible = false;
      this.getAllUsers();
    })
    console.log('Button ok clicked!');
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getAllUsers(){
    let object = {
      pageSize: 10,
      pageNumber: 0,
    };
    this.adminService.getAllUserDetails(object).subscribe((response:any)=>{
      this.usersList = response.body.users;
      this.totalItems = response.body.total_count;
    })
  }
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    let object = {
      pageSize: 10,
      pageNumber: pageIndex - 1,
    };
    this.adminService.getAllUserDetails(object).subscribe(response => {
      try {
        this.usersList = response.body.users;
        this.totalItems = response.body.total_count;
      //   this.isSpinning = false;
      } catch (error) {
        console.log(error);
      }
    });
  }
}
