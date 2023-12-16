import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBikesComponent } from './manage-bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { PreviousRidesComponent } from './bikes-list/previous-rides/previous-rides.component';

const routes: Routes = [
  {
    path:'bikes-list',
    component:BikesListComponent,
    data: {
      customBreadcrumb: 'Bikes List',
    },
    children: [ // Add children routes under 'bikes-list'
      {
        path: 'previous-rides',
        component: PreviousRidesComponent, // Add PreviousRidesComponent as a child route
        data: {
          customBreadcrumb: 'Previous Rides',
        },
      },
      // Add other children routes if needed under 'bikes-list'
    ],
  },
  {
    path:'add-bike',
    component:AddBikeComponent,
    data: {
      customBreadcrumb: 'Add Bike',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBikesRoutingModule { }
