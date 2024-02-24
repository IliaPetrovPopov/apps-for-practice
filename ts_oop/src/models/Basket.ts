import { GiftCard } from "./GiftCard";

export class Basket {
  private _giftCards: GiftCard[] = [];

  get giftCards() {
    return this._giftCards;
  }

  addGiftCards(giftCards: GiftCard[]): void {
    if(giftCards.length === 0) {
      throw new Error("Empty array!");
    }

    for (let i = 0; i < giftCards.length; i++) {
      if (!giftCards[i].calculateTotalPrice()) {
        throw new Error("Wrong total price");
      }
    }

    this._giftCards.push(...giftCards);
  }

  totalPrice(): number {
    let total = 0;

    for (let i = 0; i < this.giftCards.length; i++) {
      total += this.giftCards[i].calculateTotalPrice();
    }

    return total;
  }
}
