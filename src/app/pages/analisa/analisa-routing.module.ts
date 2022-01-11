import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalisaPage } from './analisa.page';

const routes: Routes = [
  {
    path: '',
    component: AnalisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalisaPageRoutingModule {}
