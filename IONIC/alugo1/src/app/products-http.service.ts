import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsHttp {

  constructor(public http: HttpClient) { 
  }
query(): Observable<Array<any>>{
return this.http.get<Array<any>[]>('http://localhost:3333/products');
//return this.http.get('http://localhost:3333/products')
//.pipe(map(res: Response=> res.json())

//);
}

  
}
