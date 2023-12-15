import { NgModule } from '@angular/core';

import { CurrentBookingsRoutingModule } from './current-bookings-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    CurrentBookingsRoutingModule,    
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class CurrentBookingsModule { }
