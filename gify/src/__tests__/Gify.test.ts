import { Gify } from "../models/Gify";
import { Meow } from "../models/specificCustomers/Meow";
import { Starbucks } from "../models/specificBrands/Starbucks";
import { Amazon } from "../models/specificBrands/Amazon";

describe("Gify Component", () => {
  const starbucks = new Starbucks();
  const amazon = new Amazon();

  const meow = new Meow();

  const gify = new Gify([starbucks], [meow]);

  it("should correctly add new brand for partner", () => {
    expect(gify.partnerBrands.length).toBe(1);

    gify.addNewBrand(amazon);

    expect(gify.partnerBrands.length).toBe(2);
  });

  it("should correctly add new company to their network", () => {
    expect(gify.customers.length).toBe(1);

    gify.addNewCustomer(meow);
    expect(gify.customers.length).toBe(2);
  });

  it("should check if the customer is valid", () => {
    gify.checkCustomer("meOw");
    expect(meow.giftCardSupplier).toBe(gify);
  });
});
