import { Brand } from "./Brand";
import { GiftCard } from "./GiftCard";
import { Gify } from "./Gify";

export class Customer {
  protected _listOfGiftCards: GiftCard[] = [];

  constructor(
    protected readonly _name: string,
    protected _giftCardSupplier?: Gify
  ) {}

  get name() {
    return this._name;
  }

  get listOfGiftCards() {
    return this._listOfGiftCards;
  }

  get giftCardSupplier() {
    if (this._giftCardSupplier) {
      return this._giftCardSupplier;
    } else {
      throw new Error(`${this.name} doesn't currently work with Gify`);
    }
  }

  set giftCardSupplier(supplier: Gify) {
    this._giftCardSupplier = supplier;
  }

  requestGiftCards(from: Brand, amount: number): void {
    if (this.giftCardSupplier) {
      const result = this.giftCardSupplier.sendGiftCards(
        this.name,
        from,
        amount
      );

      if (result.length > 0 && Object.keys(result[0]).includes("price")) {
        this.listOfGiftCards.push(...result);
      }
    } else {
      throw new Error(
        `${this.name} is currently not customer of Gify, make sure to become one in order to use the functionalities!`
      );
    }
  }
}
