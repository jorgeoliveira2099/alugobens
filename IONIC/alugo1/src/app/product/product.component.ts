import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProductsHttp } from '../products-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  
  products =[];
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ProductsHttp: ProductsHttp
  ) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  //ngOnInit
  ionViewDidLoad() {
this.ProductsHttp
.query()
.subscribe(data => this.products = data)
  
}

}
