import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentBookingsComponent } from './current-bookings.component';

const routes: Routes = [
  { path: '', component: CurrentBookingsComponent, data: {
    // customBreadcrumb: 'Add Profile',
  }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentBookingsRoutingModule { }
