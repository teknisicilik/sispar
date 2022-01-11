import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-perangkat-detail',
  templateUrl: './perangkat-detail.page.html',
  styleUrls: ['./perangkat-detail.page.scss'],
})
export class PerangkatDetailPage implements OnInit {
  id: any;
  data: any;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    let action = 'no-auth/perangkat_wifi';
    let param = {
      id: this.id,
    };

    await this.api
      .dataset(action, param)
      .then(async (res) => {
        console.log('Respon : ', res.data[0]);
        if (res) this.data = res.data[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
