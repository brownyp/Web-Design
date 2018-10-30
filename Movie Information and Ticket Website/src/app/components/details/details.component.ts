import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';

import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Product } from "../../_models/product";
import { ShoppingCart } from "../../_models/shopping-cart";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public pageIsReady = false;
  public products;
  public product: Product;
  public cartproducts: Observable<Product[]>;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
   private service: MainService,
   private route: ActivatedRoute,
   private store: Store<AppStore>,
   private shoppingCartService: ShoppingCartService
  ) { }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === product.key));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }



  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) =>
          this.service.getcartproducts(+params.get('id'))
        )
        .takeUntil(this.ngUnsubscribe)
        .subscribe(cartproducts => {
          this.products = cartproducts;
          this.pageIsReady = true;
          this.store.dispatch({type: 'SEE_A_cartproducts'});
        });
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addcartproductstoCart(){
    this.product = new Product();
    this.product.id = this.products.id;
    this.product.description = this.products.description;
    this.product.img = this.products.img;
    this.product.key = this.products.key;
    this.product.length = this.products.length;
    this.product.name = this.products.name;
    this.product.rate = this.products.rate;
    this.product.price = this.products.price;
    this.addProductToCart(this.product);
    alert("Add successfully!");
  }
}
