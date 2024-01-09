import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserRouteAccess } from './guard/auth.guard';

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
          breadcrumb:'Dashboard'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'manage-bike-owners',
        // canActivate: [AllPermissionGuard],
        loadChildren: () => import('./pages/admin/manage-bike-owners/manage-bike-owners.module')
          .then(user => user.ManageBikeOwnersModule),
          
        data: {
          breadcrumb:'Manage Bike Owners'
        },
        canActivate:[UserRouteAccess]

      },
      {
        path: 'manage-users',
        loadChildren: () => import('./pages/admin/manage-users/manage-users.module')
          .then(user => user.ManageUsersModule),
          
        data: {
          role: ['Admin'],
          breadcrumb:'Manage Users'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'bike-owner-dashboard',
        loadChildren: () => import('./pages/bike-owner/bike-owner-dashboard/bike-owner-dashboard.module')
          .then(user => user.BikeOwnerDashboardModule),
          
        data: {
          role: ['Bike Owner'],
          breadcrumb:'Dashboard'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: '',
        loadChildren: () => import('./pages/bike-owner/manage-bikes/manage-bikes.module')
          .then(user => user.ManageBikesModule),
          
        data: {
          role: ['Bike Owner'],
          breadcrumb:'Manage Bikes'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'previous-rides',
        loadChildren: () => import('./pages/bike-owner/manage-bikes/manage-bikes.module')
          .then(user => user.ManageBikesModule),
          
        data: {
          role: ['Bike Owner'],
          breadcrumb:'Manage Bikes'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'bookings',
        loadChildren: () => import('./pages/bike-owner/bookings/bookings.module')
          .then(user => user.BookingsModule),
          
        data: {
          role: ['Bike Owner'],
          breadcrumb:'Bookings'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'user-dashboard',
        loadChildren: () => import('./pages/user/user-dashboard/user-dashboard.module')
          .then(user => user.UserDashboardModule),
          
        data: {
          role: ['User'],
          breadcrumb:'Dashboard'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'past-rides',
        loadChildren: () => import('./pages/user/past-rides/past-rides.module')
          .then(user => user.BikeOwnerDashboardModule),
          
        data: {
          role: ['User'],
          breadcrumb:'Past Rides'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'current-bookings',
        loadChildren: () => import('./pages/user/current-bookings/current-bookings.module')
          .then(user => user.CurrentBookingsModule),
          
        data: {
          role: ['User'],
          breadcrumb:'Current Bookings'
        },
        canActivate:[UserRouteAccess]
      },
      {
        path: 'profile-details',
        loadChildren: () => import('./pages/profile-details/profile-details.module')
          .then(user => user.BikeOwnerDashboardModule),
          
        data: {
          role: ['Admin', 'Bike Owner', 'User'],
          breadcrumb:'Profile Details'
        },
        canActivate:[UserRouteAccess]
      }
    ]
    },
    {
      path:'**',
      component:NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
