import { Component } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import { ProductsHttp } from '../products-http.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  products =[];
  ProductHttp: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ProductsHttp: ProductsHttp
  ) { }

  ngOnInit() {
this.ProductHttp
.query()
.subcribe(data => this.products = data)
  
}

}
