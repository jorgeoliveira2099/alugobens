import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  student: any = {};

  constructor(public api: RestApiService, public loadingCtrl: LoadingController, public route: ActivatedRoute, public router: Router, private location: Location) { }

  ngOnInit() {
    this.getStudent();
  }

  async getStudent() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getStudentById(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.student = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async delete(id) {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.api.deleteStudent(id)
      .subscribe(res => {
        loading.dismiss();
        this.location.back();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
