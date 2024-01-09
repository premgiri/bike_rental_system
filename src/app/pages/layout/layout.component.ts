import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  isCollapsed = false;
  isCollapsedNav = false;
  menuItems:any;
  visible: boolean = false;
  constructor(private ngxPermission: NgxPermissionsService, private router:Router){}

  ngOnInit(): void {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');

    // Load the permissions array using ngxPermissionsService
    this.ngxPermission.loadPermissions(roles);
    this.menuItems = [
      {
        path: '/admin-dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        role:'Admin'
      },
      {
        path: '/manage-bike-owners',
        name: 'Manage Bike Owners',
        icon: 'solution',
        role:'Admin'
      },
      {
        path: '/manage-users',
        name: 'Manage Users',
        icon: 'team',
        role:'Admin'

      },
      {
        path: '/bike-owner-dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        role:'Bike Owner'
      },
      {
        name: 'Manage Bikes',
        icon: 'tool',
        role:'Bike Owner',
        subMenu:[
          {
            path:'/bikes-list', // Child route for Bikes List
            name:'Bikes List',
            icon:'gateway',
            role:'Bike Owner',
          },
          {
            path:'/add-bike', // Child route for Add Bike
            name:'Add Bike',
            icon:'swap',
            role:'Bike Owner',
          }
        ]
      },
      {
        path: '/bookings',
        name: 'Bookings',
        icon: 'unordered-list',
        role:'Bike Owner'
      },
      {
        path: '/user-dashboard',
        name: 'Dashboard',
        icon: 'user',
        role:'User'
      },
      {
        path: '/past-rides',
        name: 'Past Rides',
        icon: 'history',
        role:'User'
      },
      {
        path: '/current-bookings',
        name: 'Current Bookings',
        icon: 'file-done',
        role:'User'
      },
    ];
  }
  change(value: boolean): void {
    console.log(value);
  }

  onLogout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }


}
