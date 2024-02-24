import { GiftCard } from "../models/GiftCard";
import { Amazon } from "../models/brands/Amazon";
describe("Amazon Component", () => {
  it("should be able to change the discount correctly", () => {
    const amazon = new Amazon(10);

    expect(amazon.discount).toBe(10);

    amazon.discount = 15;

    expect(amazon.discount).toBe(15);
  });

  it("should throw when negative discount is passed", () => {
    expect(() => new Amazon(-1)).toThrow();
  });

  it("should throw when large discount is passed", () => {
    expect(() => new Amazon(100)).toThrow();
  });
});
