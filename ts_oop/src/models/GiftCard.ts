import { Brand } from "./Brand";

export class GiftCard {
  private _totalPrice: number = 0;

  constructor(private _faceValue: number, private _brand: Brand) {
    if (this._faceValue <= 0) {
      throw new Error("Invalid face value!");
    }
  }

  calculateTotalPrice(): number {
    return (this._totalPrice =
      this._faceValue - this._faceValue * (this._brand.discount / 100));
  }
}
