import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerangkatDetailPage } from './perangkat-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PerangkatDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerangkatDetailPageRoutingModule {}
