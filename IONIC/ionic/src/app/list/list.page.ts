import { Component, OnInit } from '@angular/core';

import { LoadingController, AlertController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { reject } from 'q';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  students: any;

  constructor(public api: RestApiService, public loadingController: LoadingController, public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getStudents();
  }

  ionViewWillEnter() {
    this.getStudents();
  }

  async getStudents() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getStudent()
      .subscribe(res => {
        console.log(res);
        this.students = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 1000);
  }
}
