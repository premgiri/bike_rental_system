import { Component } from '@angular/core';
interface DataItem {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob:string;
  gender:string;
  status:string;
}
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {
  isVisible = false;
  selectedValue = null;
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
      title: 'Gender',
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
  listOfData: DataItem[] = [
    {
      firstName: 'John',
      lastName: 'Brown',
      email: 'gohn@gmail.com',
      phoneNumber: '3243543543543',
      dob:'20-11-2023',
      gender:'Male',
      status:'Active'
    },
    {
      firstName: 'John',
      lastName: 'Brown',
      email: 'gohn@gmail.com',
      phoneNumber: '3243543543543',
      dob:'20-11-2023',
      gender:'Male',
      status:'Inactive'
    },
    {
      firstName: 'John',
      lastName: 'Brown',
      email: 'gohn@gmail.com',
      phoneNumber: '3243543543543',
      dob:'20-11-2023',
      gender:'Male',
      status:'Active'
    },
    {
      firstName: 'John',
      lastName: 'Brown',
      email: 'gohn@gmail.com',
      phoneNumber: '3243543543543',
      dob:'20-11-2023',
      gender:'Male',
      status:'Inactive'
    },
  ];
  
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
