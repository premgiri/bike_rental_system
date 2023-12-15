import { NgModule } from '@angular/core';

import { PastRidesRoutingModule } from './past-rides-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    PastRidesRoutingModule,    
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class BikeOwnerDashboardModule { }
