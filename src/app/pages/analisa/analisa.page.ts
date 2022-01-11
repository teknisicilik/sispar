import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-analisa',
  templateUrl: './analisa.page.html',
  styleUrls: ['./analisa.page.scss'],
})
export class AnalisaPage implements OnInit {
  loading: boolean = false;
  gejalas = [
    {
      id: 1,
      name: 'Internet bisa terhubung, tapi nama wifi sering hilang dan muncul sendiri',
    },
    {
      id: 2,
      name: 'Muncul nama wifi suspend@wifi.id',
    },
    {
      id: 3,
      name: 'Tortor ad blandit urna quis montes conubia consectetur velit faucibus mattis nulla himenaeos eros maximus iaculis vel',
    },
  ];

  selectedGejala: any = [];
  analised: boolean = false;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  removeGejala(index) {
    this.selectedGejala.splice(index, 1);
  }

  gejalaChange(e) {
    let value = e.value;
    this.selectedGejala = value;
  }

  onAnalis() {
    console.log(this.selectedGejala);
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.analised = true;
    }, 3000);
  }

  onReAnalis() {
    this.analised = false;
  }

  onDone() {
    this.navCtrl.back();
  }
}
