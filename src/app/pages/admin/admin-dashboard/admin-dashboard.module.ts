import { NgModule } from '@angular/core';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    AdminDashboardRoutingModule,
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class AdminDashboardModule { }
