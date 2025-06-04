import books from "../data/books";

import BookCards from "../components/BookCards";

export default function BooksPage() {
  return (
    <>
      <BookCards books={books} />
    </>
  );
}
