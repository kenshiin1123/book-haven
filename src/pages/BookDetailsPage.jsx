import { useParams } from "react-router";
import books from "../data/books";
import Image from "../components/Image";
export default function BookDetailsPage() {
  const { bookId } = useParams();
  const book = books.find((book) => String(book._id) === String(bookId));
  return (
    <main className="mt-10">
      <Image title={book.title} src={book.image} />
      <hr className="my-15 border-t-gray-400" />
    </main>
  );
}
