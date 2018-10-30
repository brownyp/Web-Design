import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Product } from "../../_models/product";
import { ShoppingCart } from "../../_models/shopping-cart";
import { CartItem } from "../../_models/cart-item";
import { Subscription } from "rxjs/Subscription";
import { ProductsDataService } from "../../services/product.service";

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public totalPrice: number;
  public amount: number;
  public firstFlag:number;

  private products: Product[];
  private cartSubscription: Subscription;
  private operation: boolean;

  private code: number;
  private discount: boolean;


  constructor(private shoppingCartService: ShoppingCartService,
              private productsService: ProductsDataService ) {

  }


  public emptyCart(): void {
    this.shoppingCartService.empty();
  }


 public ngOnInit(): void {
    this.totalPrice=0;
    this.operation=true;
    this.discount = true;
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.products.find((p) => p.key === item.productId);
                              if(this.operation){
                                this.totalPrice = this.totalPrice+product.price;
                                this.amount = this.totalPrice;
                              }else{

                              }
                              return {
                                ...item,
                                product,
                                totalCost: product.price * item.quantity };
                           });



      });
    });

  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public deleteproducts(p:Product,i:number): void{
    this.operation = false;
    this.shoppingCartService.addItem(p,-i);
    // this.totalPrice=this.totalPrice-p.price*i;
    this.amount = this.amount - p.price;
  }


  public addproducts(p:Product,i:number):void{
    this.operation = false;
    this.shoppingCartService.addItem(p,i);
    this.amount = this.amount + p.price;
  }

  public checkIfUserValid():void{
    if(this.code==123456&&this.discount){
      this.amount = this.amount * 0.7;
      this.discount = false;
    }else if(this.code==12345&&this.discount){
      this.amount = this.amount * 0.6;
      this.discount = false;
    }else if (this.code==1234&&this.discount){
      this.amount = this.amount * 0.5;
      this.discount = false;
    }
  }

}
