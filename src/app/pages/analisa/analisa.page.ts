import { ApiService } from 'src/app/services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-analisa',
  templateUrl: './analisa.page.html',
  styleUrls: ['./analisa.page.scss'],
})
export class AnalisaPage implements OnInit {
  loading: boolean = false;
  gejalas = [];

  selectedGejala: any = [];
  analised: boolean = false;
  analisa_data: any;

  constructor(private api: ApiService, public navCtrl: NavController) {}

  async ngOnInit() {
    await this.getGejala();
  }

  async getGejala() {
    let action = 'no-auth/master_gejala';
    let param = {};

    await this.api
      .dataset(action, param)
      .then(async (res) => {
        console.log('Respon get gejala: ', res);
        if (res) this.gejalas = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeGejala(index) {
    this.selectedGejala.splice(index, 1);
  }

  gejalaChange(e) {
    let value = e.value;
    this.selectedGejala = value;
  }

  async onAnalis() {
    // console.log(this.selectedGejala);

    this.loading = true;
    let gejalas = [];
    for (const sg of this.selectedGejala) {
      gejalas.push(sg.id);
    }

    let action = `custom/calculate-analisa-kerusakan`;
    let param = {};
    let body = {
      gejala_ids: gejalas,
    };

    await this.api
      .post(action, param, body)
      .then(async (res) => {
        console.log('Respon calculate: ', res);

        if (res) this.analisa_data = res.data;

        setTimeout(() => {
          this.loading = false;
          this.analised = true;
        }, 1000);
      })
      .catch((err) => {
        console.log(err);

        this.loading = false;
        this.analised = true;
      });
  }

  onReAnalis() {
    this.analised = false;
  }

  onDone() {
    this.navCtrl.back();
  }
}
