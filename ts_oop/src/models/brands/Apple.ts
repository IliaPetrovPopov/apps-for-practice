import { Brand } from "../Brand";

export class Apple extends Brand {
  constructor(protected _discount: number) {
    super();

    this.discount = _discount;
  }
}
