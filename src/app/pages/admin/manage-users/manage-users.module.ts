import { NgModule } from '@angular/core';

import { ManageUsersRoutingModule } from './manage-users-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    ManageUsersRoutingModule,    
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class ManageUsersModule { }
