import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  isCollapsed = true;
  menuItems:any;
  visible: boolean = false;

  ngOnInit(): void {
    this.menuItems = [
      {
        path: '/admin-dashboard',
        name: 'Dashboard 1',
        icon: 'dashboard',
      },
      {
        path: '/manage-bike-owners',
        name: 'Manage Bike Owners',
        icon: 'solution',
      },
      {
        path: '/manage-users',
        name: 'Manage Users',
        icon: 'team',
      },
      {
        path: '/bike-owner-dashboard',
        name: 'Dashboard 2',
        icon: 'dashboard',
      },
      {
        name: 'Manage Bikes',
        icon: 'tool',
        subMenu:[
          {
            path:'/bikes-list', // Child route for Bikes List
            name:'Bikes List',
            icon:'gateway'
          },
          {
            path:'/add-bike', // Child route for Add Bike
            name:'Add Bike',
            icon:'swap'
          }
        ]
      },
      {
        path: '/bookings',
        name: 'Bookings',
        icon: 'unordered-list',
      },
      {
        path: '/user-dashboard',
        name: 'Dashboard 3',
        icon: 'user',
      },
      {
        path: '/past-rides',
        name: 'Past Rides',
        icon: 'history',
      },
      {
        path: '/current-bookings',
        name: 'Current Bookings',
        icon: 'file-done',
      },
    ];
  }
  change(value: boolean): void {
    console.log(value);
  }


}
