import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalisaPageRoutingModule } from './analisa-routing.module';

import { AnalisaPage } from './analisa.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    IonicSelectableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AnalisaPageRoutingModule,
  ],
  declarations: [AnalisaPage],
})
export class AnalisaPageModule {}
