import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { BikeOwnerDashboardComponent } from './pages/bike-owner/bike-owner-dashboard/bike-owner-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ManageBikeOwnersComponent } from './pages/admin/manage-bike-owners/manage-bike-owners.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { ManageBikesComponent } from './pages/bike-owner/manage-bikes/manage-bikes.component';
import { BookingsComponent } from './pages/bike-owner/bookings/bookings.component';
import { PastRidesComponent } from './pages/user/past-rides/past-rides.component';
import { CurrentBookingsComponent } from './pages/user/current-bookings/current-bookings.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { HttpInterceptorService } from './interceptors/http.interceptor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DatePipe } from '@angular/common';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    RegistrationComponent,
    CurrentBookingsComponent,
    PastRidesComponent,
    BookingsComponent,
    ManageBikesComponent,
    ManageUsersComponent,
    LayoutComponent,
    UserDashboardComponent,
    LoginComponent,
    AdminDashboardComponent,
    BikeOwnerDashboardComponent,
    ManageBikeOwnersComponent
  ],
  imports: [
    SharedModule,
    NgxPermissionsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,

  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
