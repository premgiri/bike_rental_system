import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBikeOwnersComponent } from './manage-bike-owners.component';

const routes: Routes = [
  { path: '', component: ManageBikeOwnersComponent, data: {
    // customBreadcrumb: 'Add Profile',
  }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBikeOwnersRoutingModule { }
