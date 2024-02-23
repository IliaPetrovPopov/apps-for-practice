import { Gify } from "../models/Gify";
import { Meow } from "../models/specificCustomers/Meow";
import { Starbucks } from "../models/specificBrands/Starbucks";

describe("Meow Customer Component", () => {
  const starbucks = new Starbucks();

  const gify = new Gify([starbucks], []);

  const meow = new Meow();

  it("should correctly set its name", () => {
    expect(meow.name).toBe("Meow");
  });

  it("should not have gift card supplier", () => {
    expect(() => meow.giftCardSupplier).toThrow();
  });

  it("should be able to become customer of Gify", () => {
    gify.addNewCustomer(meow);

    expect(meow.giftCardSupplier).toBe(gify);
  });
});
