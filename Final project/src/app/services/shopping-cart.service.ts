import { Injectable } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { CartItem } from "../_models/cart-item";
import { Product } from "../_models/product";
import { ShoppingCart } from "../_models/shopping-cart";
import { ProductsDataService } from "../services/product.service";


// const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService {

  public CART_KEY;
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: Product[];


  public constructor(private storageService: StorageService,
                     private productService: ProductsDataService,  ) {
                         
    this.productService.all().subscribe((products) => this.products = products);
    this.storage = this.storageService.get();

    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
        this.subscribers.push(observer);
        observer.next(this.retrieve());
        return () => {
          this.subscribers = this.subscribers.filter((obs) => obs !== observer);
        };
      });
}

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === product.key);
    if (item === undefined) {
      item = new CartItem();
      item.productId = product.key;
      cart.items.push(item);
    }

    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);

    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  public getNum(pp:Product):number{
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === pp.key);
    alert(item.quantity);
    return item.quantity;
  
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(this.CART_KEY); 
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        });
  }




}