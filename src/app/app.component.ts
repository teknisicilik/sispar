import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtrl: NavController) {
    // this.cekAuth();
    StatusBar.setBackgroundColor({
      color: '#e73328',
    });
  }

  cekAuth() {
    let token = localStorage.getItem('token');

    if (!token) {
      this.navCtrl.navigateRoot(['/login']);
    } else {
      this.navCtrl.navigateRoot(['']);
    }
  }
}
