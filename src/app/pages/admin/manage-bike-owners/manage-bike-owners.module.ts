import { NgModule } from '@angular/core';

import { ManageBikeOwnersRoutingModule } from './manage-bike-owners-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    ManageBikeOwnersRoutingModule,    
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class ManageBikeOwnersModule { }
