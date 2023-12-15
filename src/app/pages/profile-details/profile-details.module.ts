import { NgModule } from '@angular/core';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    ProfileDetailsRoutingModule,    
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class BikeOwnerDashboardModule { }
