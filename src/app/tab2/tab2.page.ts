import { Component, ViewChild } from '@angular/core';
import {
  IonInput,
  IonModal,
  ModalController,
  NavController,
} from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { Tab } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements Tab {
  datas: any[];
  page: number = 1;
  search: any;
  constructor(
    private api: ApiService,
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

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

  async refreshData() {
    this.datas = [];
    this.page = 1;
    await this.getData();
  }

  async getData() {
    let action = 'no-auth/perangkat_wifi/dataset';
    let param = {
      page: this.page,
      search: this.search,
    };

    await this.api
      .get(action, param)
      .then(async (res) => {
        console.log('Respon : ', res.data);
        if (res) this.datas = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async doRefresh(e) {
    this.refreshData();
    await this.getData();
    e.target.complete();
  }

  async onInfinite(e) {
    this.page = this.page + 1;
    await this.getData();
    e.target.complete();
  }

  async onSearchChange(e) {
    console.log(e);
    let value = e.detail.value;
    this.search = value;
    this.refreshData();
  }

  openDetail(data) {
    let id = data.id;
    this.navCtrl.navigateForward([`/perangkat-detail/${id}`]);
  }
}
