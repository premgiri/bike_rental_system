import { NgModule } from '@angular/core';

import { BookingsRoutingRoutingModule } from './bookings-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    BookingsRoutingRoutingModule,
     CommonModule
  ],
  declarations: [],
  exports: []
})
export class BookingsModule { }
