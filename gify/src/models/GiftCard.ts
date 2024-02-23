export class GiftCard {
  private _price: number;
  
  constructor(
    private value: number,
    private discount: number = 0
  ) {
    this._price = Number((this.value - this.value * (this.discount / 100)).toFixed(2));
  }

  get price(): number {
    return this._price;
  }

}
