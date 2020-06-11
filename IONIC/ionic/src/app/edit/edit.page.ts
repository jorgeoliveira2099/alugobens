import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  studentForm: FormGroup;

  constructor(public api: RestApiService, public loadingCtrl: LoadingController, private route: ActivatedRoute, public router: Router, private formBuilder: FormBuilder) {
    this.getStudent(this.route.snapshot.paramMap.get('id'));
    this.studentForm = this.formBuilder.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  async getStudent(id) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getStudentById(id).subscribe(res => {
      this.studentForm.controls['first_name'].setValue(res.first_name);
      this.studentForm.controls['last_name'].setValue(res.last_name);
      this.studentForm.controls['email'].setValue(res.email);
      console.log(this.studentForm);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  async updateStudent() {
    await this.api.updateStudent(this.route.snapshot.paramMap.get('id'), this.studentForm.value)
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/detail', JSON.stringify(id)]);
      }, (err) => {
        console.log(err);
      });
  }

}
