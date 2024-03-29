import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBikesComponent } from './manage-bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { PreviousRidesComponent } from './bikes-list/previous-rides/previous-rides.component';
import { BikeDetailsRoutingResolveService } from '../services/bike-details-routing-resolve.service';

const routes: Routes = [
  {
    path:'bikes-list',
    component:BikesListComponent,
    data: {
      breadcrumb: 'Bikes List',
    },
  },
  {
    path:'add-bike',
    component:AddBikeComponent,
    data: {
      breadcrumb: 'Add Bike',
    },
  },
  {
    path:'edit-bike/:id',
    component:AddBikeComponent,
    resolve: {
      bikeDetails: BikeDetailsRoutingResolveService,
    },
    data: {
      breadcrumb: 'Update Bike',
    },
  },
  {
    path:'previous-rides/:id',
    component:PreviousRidesComponent,
    data: {
      breadcrumb: 'Previous Rides',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBikesRoutingModule { }
