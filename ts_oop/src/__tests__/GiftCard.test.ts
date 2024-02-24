import { GiftCard } from "../models/GiftCard";
import { Amazon } from "../models/brands/Amazon";
describe("Gift Card Component", () => {
  it("should calculate the total price correctly", () => {
    const amazon = new Amazon(5);

    const giftCard = new GiftCard(20, amazon);
    expect(giftCard.calculateTotalPrice()).toBe(19);
  });

  it("should fail creating instance of gift card with negative face value", () => {
    const amazon = new Amazon(5);
    
    expect(() => new GiftCard(-1, amazon)).toThrow();
  });
});
