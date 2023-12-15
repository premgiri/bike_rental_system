import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBikesComponent } from './manage-bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { AddBikeComponent } from './add-bike/add-bike.component';

const routes: Routes = [
  {
    path:'bikes-list',
    component:BikesListComponent,
    data: {
      customBreadcrumb: 'Bikes List',
    },
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
