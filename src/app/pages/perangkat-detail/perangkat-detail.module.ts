import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerangkatDetailPageRoutingModule } from './perangkat-detail-routing.module';

import { PerangkatDetailPage } from './perangkat-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerangkatDetailPageRoutingModule
  ],
  declarations: [PerangkatDetailPage]
})
export class PerangkatDetailPageModule {}
