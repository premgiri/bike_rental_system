import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeOwnerDashboardComponent } from './bike-owner-dashboard.component';

const routes: Routes = [
  { path: '', component: BikeOwnerDashboardComponent, data: {
    // customBreadcrumb: 'Add Profile',
  }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeOwnerDashboardRoutingModule { }
