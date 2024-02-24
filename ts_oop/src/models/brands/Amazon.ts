import { Brand } from "../Brand";

export class Amazon extends Brand {
  constructor(protected _discount: number) {
    super();

    this.discount = _discount;
  }
}
