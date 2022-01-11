import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public navctrl: NavController) {}

  ngOnInit() {}

  onAnalis() {
    this.navctrl.navigateForward([`/analisa`]);
  }
}
