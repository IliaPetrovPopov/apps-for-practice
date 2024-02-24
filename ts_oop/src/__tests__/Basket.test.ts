import { GiftCard } from "../models/GiftCard";
import { Amazon } from "../models/brands/Amazon";
import { Apple } from "../models/brands/Apple";
import { Basket } from "../models/Basket";

describe("Gift Card Component", () => {
  it("should add new gift card to the ", () => {
    const basket = new Basket();
    const amazon = new Amazon(5);
    const giftCard = new GiftCard(20, amazon);

    expect(basket.giftCards.length).toBe(0);

    basket.addGiftCards([giftCard]);

    expect(basket.giftCards.length).toBe(1);

    expect(basket.giftCards[0].calculateTotalPrice()).toBe(19);
  });

  it("should calculate the price correctly", () => {
    const basket = new Basket();

    const amazon = new Amazon(5);
    const apple = new Apple(10);

    const giftCardForAmazon = new GiftCard(20, amazon);
    const giftCardForApple = new GiftCard(25, apple);

    basket.addGiftCards([giftCardForAmazon, giftCardForApple]);

    expect(basket.totalPrice()).toBe(41.5);
  });
});
