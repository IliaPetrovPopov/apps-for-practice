import { Brand } from "./Brand";
import { Customer } from "./Customer";
import { GiftCard } from "./GiftCard";

export class Gify {
  constructor(private _partnerBrands: Brand[], private _customers: Customer[]) {}

  get partnerBrands() {
    return this._partnerBrands;
  }

  get customers() {
    return this._customers;
  }

  addNewCustomer(customer: Customer): void {
    this.customers.push(customer);
    customer.giftCardSupplier = this;
  }

  addNewBrand(brand: Brand): void {
    this.partnerBrands.push(brand);
  }

  checkCustomer(name: string): void {
    const isCustomerToGify = this.customers.some(
      (customer) => customer.name.toLowerCase() === name.toLowerCase()
    );

    if (!isCustomerToGify) {
      throw new Error("Sorry, this company doesn't work with us!");
    }
  }

  retrieveGiftCards(from: Brand, amount: number): GiftCard[] {
    const hasSufficientAmount = from.availableGiftCards.length >= amount;

    if (!hasSufficientAmount) {
      throw new Error(
        "Sorry, this brand currently doesn't have the amount of gift cards you need!"
      );
    }

    let giftCards: GiftCard[] = [];

    for (let i = from.availableGiftCards.length - 1; i > 0; i--) {
      giftCards.push(from.availableGiftCards[i]);
      from.availableGiftCards.pop();
    }

    return giftCards;
  }

  sendGiftCards(to: string, brand: Brand, amount: number): GiftCard[] {
    this.checkCustomer(to);

    const giftCards = this.retrieveGiftCards(brand, amount);

    if (giftCards.length > 0) {
      return giftCards;
    } else {
      throw new Error(
        `Something went wrong with sending the gift cards to ${to}`
      );
    }
  }
}
