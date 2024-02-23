import { Customer } from "../Customer";
import { Gify } from "../Gify";

export class Meow extends Customer {
  constructor(protected gify?: Gify) {
    super("Meow", gify || undefined);
  }

  // purchaseGiftCard(amount: number): void {}
}
