import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastRidesComponent } from './past-rides.component';

const routes: Routes = [
  { path: '', component: PastRidesComponent, data: {
    // customBreadcrumb: 'Add Profile',
  }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastRidesRoutingModule { }
