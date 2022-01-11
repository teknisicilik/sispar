import { ApiService } from '../services/api/api.service';
import { Component } from '@angular/core';
import { Tab } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements Tab {
  src: any;
  datas: any;

  skeletons = Array(5);
  loading: boolean = true;

  constructor(private api: ApiService) {}

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
