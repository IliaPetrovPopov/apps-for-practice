import { GiftCard } from "./GiftCard";

export class Brand {
  protected _availableGiftCards: GiftCard[] = [];
  protected constructor(protected readonly name: string) {
    this.name = name;
  }

  get availableGiftCards() {
    return this._availableGiftCards;
  }

  protected issueGiftCards(numberOfCards: number): number {
    return 1;
  }
}
