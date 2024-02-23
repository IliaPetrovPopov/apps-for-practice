import { Amazon } from "../models/specificBrands/Amazon";

describe("Amazon Component", () => {
  const testBrand = new Amazon();
  
  it("should have created new Amazon Brand", () => {
    expect(testBrand).toBeDefined();
  });

  it("should have 5 gift cards initially", () => {
    expect(testBrand.availableGiftCards.length).toBe(5)
  });
});
