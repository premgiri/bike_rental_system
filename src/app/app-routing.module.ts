import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'register', component:RegistrationComponent },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'admin-dashboard',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/admin/admin-dashboard/admin-dashboard.module')
          .then(user => user.AdminDashboardModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Dashboard'
        }
      },
      {
        path: 'manage-bike-owners',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/admin/manage-bike-owners/manage-bike-owners.module')
          .then(user => user.ManageBikeOwnersModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Manage Bike Owners'
        }
      },
      {
        path: 'manage-users',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/admin/manage-users/manage-users.module')
          .then(user => user.ManageUsersModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Manage Users'
        }
      },
      {
        path: 'bike-owner-dashboard',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/bike-owner/bike-owner-dashboard/bike-owner-dashboard.module')
          .then(user => user.BikeOwnerDashboardModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Dashboard'
        }
      },
      {
        path: '',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/bike-owner/manage-bikes/manage-bikes.module')
          .then(user => user.ManageBikesModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Manage Bikes'
        }
      },
      {
        path: 'bookings',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/bike-owner/bookings/bookings.module')
          .then(user => user.BookingsModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Bookings'
        }
      },
      {
        path: 'user-dashboard',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/user/user-dashboard/user-dashboard.module')
          .then(user => user.UserDashboardModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Dashboard'
        }
      },
      {
        path: 'past-rides',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/user/past-rides/past-rides.module')
          .then(user => user.BikeOwnerDashboardModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Past Rides'
        }
      },
      {
        path: 'current-bookings',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/user/current-bookings/current-bookings.module')
          .then(user => user.CurrentBookingsModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Current Bookings'
        }
      },
      {
        path: 'profile-details',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/profile-details/profile-details.module')
          .then(user => user.BikeOwnerDashboardModule),
          
        data: {
          // role: ['Admin', 'Resource', 'Approver'],
          breadcrumb:'Profile Details'
        }
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
