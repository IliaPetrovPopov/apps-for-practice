import { BookGenres } from "./enums";

export interface BookCharacteristics {
  title: string;
  genre: BookGenres;
  price: number;
  availability: boolean;
}
