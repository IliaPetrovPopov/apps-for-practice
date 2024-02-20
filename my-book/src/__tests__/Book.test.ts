import type * as BookT from "../models/Book"
import type * as BookGenresE from "../utils/enums";

const { Book } = jest.requireActual<typeof BookT>("../models/Book")
const { BookGenres } = jest.requireActual<typeof BookGenresE>("../utils/enums")

// import { Book } from "../models/Book"

test("Creating new book", () => {
  const book = new Book("Atomic Habits", BookGenres.SelfHelp, 15, true)
  expect(book).toBeDefined();

  expect(Object.keys(book)).toHaveLength(4)
})

