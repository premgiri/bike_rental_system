import { NgModule } from '@angular/core';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    UserDashboardRoutingModule,
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class UserDashboardModule { }
