import { NgModule } from '@angular/core';

import { ManageBikesRoutingModule } from './manage-bikes-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    ManageBikesRoutingModule,    
    CommonModule,
    IconsProviderModule
  ],
  declarations: [
    BikesListComponent,
    AddBikeComponent
  ],
  exports: []
})
export class ManageBikesModule { }
