import { BookGenres } from "../utils/enums";
import { BookCharacteristics } from "../utils/interfaces";

export class Book implements BookCharacteristics {
  constructor(
    public title: string,
    public genre: BookGenres,
    public price: number,
    public availability: boolean
  ) {}
}
