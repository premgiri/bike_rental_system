import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-manage-bike-owners',
  templateUrl: './manage-bike-owners.component.html',
  styleUrls: ['./manage-bike-owners.component.scss']
})
export class ManageBikeOwnersComponent implements OnInit{
  isVisible:boolean = false;
  selectedValue = '';
  private selectedUserId:number = 0;
  public bikeOwnersList:any[] = [];
  public userDetails:any;
  public itemsPerPage = 10;
  public totalItems = 0;
  public page = 1;
  constructor(private adminService:AdminService, private message:NzMessageService){}
  ngOnInit(): void {
      this.getAllBikeOwners();
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
      this.getAllBikeOwners();
    })
    console.log('Button ok clicked!');
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getAllBikeOwners(){
    let object = {
      pageSize: 10,
      pageNumber: 0,
    };
    this.adminService.getAllBikeOwners(object).subscribe((response:any)=>{
      console.log(response);
      this.bikeOwnersList = response.body.owners;
      this.totalItems = response.body.total_count;
    })
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    let object = {
      pageSize: 10,
      pageNumber: pageIndex - 1,
    };
    this.adminService.getAllBikeOwners(object).subscribe(response => {
      try {
        this.bikeOwnersList = response.body.owners;
        this.totalItems = response.body.total_count;
      //   this.isSpinning = false;
      } catch (error) {
        console.log(error);
      }
    });
  }
}
