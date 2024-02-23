import { GiftCard } from "../models/GiftCard";

describe("Gift Card Component", () => {
  const bigDiscountCard = new GiftCard(50, 70);

  it("should have created new Gift Card", () => {
    expect(bigDiscountCard).toBeDefined();
  });

  it("should have discounted total price", () => {
    expect(bigDiscountCard.price).toBe(15);
  });
});
