import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  studentForm: FormGroup;

  constructor(public api: RestApiService, public loadingCtrl: LoadingController, private route: ActivatedRoute, public router: Router, private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  createStudent(): FormGroup {
    return this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: ''
    });
  }

  async saveStudent() {
    await this.api.postStudent(this.studentForm.value)
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/detail/' + id]);
      }, (err) => {
        console.log(err);
      });
  }

}
