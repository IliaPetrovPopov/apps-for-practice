import { GiftCard } from "./GiftCard";

export class Brand {
  protected _discount: number = 0;
  protected _giftCards: GiftCard[] = [];

  constructor() {}

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0 || value > 99) throw new Error("Invalid discount value!");

    this._discount = value;
    
    for (let i = 0; i < this._giftCards.length; i++) {
      this._giftCards[i].calculateTotalPrice()
    }
  }
}
