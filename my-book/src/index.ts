import { Book } from "./models/Book";
import { BookStore } from "./models/BookStore";
import { BookGenres } from "./utils/enums";

const shelf = new BookStore();

const atomicHabits = new Book("Atomic Habits", BookGenres.SelfHelp, 15, true);
const surroundedByIdiots = new Book("Surrounded By Idiots", BookGenres.SelfHelp, 40, true);

shelf.add(atomicHabits);
shelf.add(surroundedByIdiots)

// console.log(shelf.listBooks());
// shelf.update<number>(atomicHabits, "price", 13);
shelf.search("price", 15);
