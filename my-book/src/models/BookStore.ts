import { Book } from "./Book";

export class BookStore {
  private _inventory: Book[] = [];

  get inventory(): string {
    return ` The current store contains ${this._inventory.length} books`;
  }

  add(newBook: Book): void {
    this._inventory.push(newBook);
  }

  remove(title: string): void {
    this._inventory = this._inventory.filter((book) => book.title != title);
  }

  update<T extends Book[keyof Book]>(
    bookToUpdate: Book,
    detail: keyof Book,
    value: T
  ): void {
    const book = this._inventory.find(
      (book) => book.title === bookToUpdate.title
    );

    if (book) {
      if (typeof value === typeof book[detail]) {
        (book[detail] as T) = value;
        console.log(`Book's ${detail} updated successfully`);
      } else {
        throw new Error("You are trying to use invalid value!");
      }
    } else {
      throw new Error("Such book doesn't exist in the current Book Store!");
    }
  }

  search<T>(criteria: keyof Book, value: T): Book {
    const book = this._inventory.find((book) => book[criteria] === value);

    if (book) {
      console.log(`Picking up ${book.title} from the store...`);
      return book;
    } else {
      throw new Error("Such book doesn't exist in the current store!");
    }
  }

  listBooks(): string {
    const books = this._inventory.reduce((acc, curr) => {
      return (acc += `${curr.title} | Genre: ${curr.genre} | Price: ${curr.price} | Available: ${curr.availability}
- - -\n`);
    }, "");

    return books;
  }
}
