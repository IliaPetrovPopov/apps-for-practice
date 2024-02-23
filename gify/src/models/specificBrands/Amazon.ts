import { Brand } from "../Brand";
import { GiftCard } from "../GiftCard";

export class Amazon extends Brand {
  constructor() {
    super("Amazon");

    for (let i = 0; i < 5; i++) {
      this._availableGiftCards.push(new GiftCard(16, 25));
    }
  }

}
