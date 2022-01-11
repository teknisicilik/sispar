import { Component, ViewChild } from '@angular/core';
import { IonInput, IonModal, ModalController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { Tab } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements Tab {
  constructor(private api: ApiService, public modalCtrl: ModalController) {}

  ngOnInit() {}

  tabsWillEnter() {
    this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.refreshData();
  }

  tabsDidEnter() {
    this.ionViewDidEnter();
  }

  ionViewDidEnter() {}

  async refreshData() {}
}
