import { CartItem } from "./cart-item";

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public itemsTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;
    this.itemsTotal = src.itemsTotal;
  }
}