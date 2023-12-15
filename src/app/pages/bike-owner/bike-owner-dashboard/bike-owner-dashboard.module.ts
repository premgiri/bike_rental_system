import { NgModule } from '@angular/core';

import { BikeOwnerDashboardRoutingModule } from './bike-owner-dashboard-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    BikeOwnerDashboardRoutingModule,    
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class BikeOwnerDashboardModule { }
