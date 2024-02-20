import { Book } from "./models/Book";
import { BookStore } from "./models/BookStore";
import { BookGenres } from "./utils/enums";

const shelf = new BookStore();

const atomicHabits = new Book("Atomic Habits", BookGenres.SelfHelp, 15, true);

shelf.add(atomicHabits);
shelf.update<number>(atomicHabits, "price", 14);
