import { Injectable } from '@angular/core';
import { genreType } from './products.model';
import { productsS } from './products.mock-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MainService {

  productsList:any[] = productsS;

  genres = genreType;

  getproductss(): Observable<any> {
    return Observable.of(this.productsList);
  }

  getcartproducts(id): Observable<any> {
    let selectedproducts = this.productsList.filter(products => products.id === id);
    return Observable.of(selectedproducts[0]);
  }

  getGenres(): Observable<any> {
    return Observable.of(this.genres);
  }

}
