import { Book } from "./Book";

export class BookStore {
  private inventory: Book[] = [];

  add(newBook: Book): void {
    this.inventory.push(newBook);
  }

  remove(title: string): void {
    this.inventory = this.inventory.filter((book) => book.title != title);
  }
  
  update<T>(
    bookToUpdate: Book,
    detail: keyof Book,
    value: T
  ): void {
    const book = this.inventory.find(
      (book) => book.title === bookToUpdate.title
    );

    if (book) {
      (book[detail] as T) = value;
      console.log(`Book's ${detail} updated successfully`); 
    } else {
      throw new Error("Such book doesn't exist in the current Book Store!");
    }
  }
}
