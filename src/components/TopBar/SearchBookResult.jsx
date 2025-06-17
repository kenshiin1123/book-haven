import { Link } from "react-router";

const BookSearchResult = ({ searchedBooks, searchInput }) => {
  return (
    searchedBooks.length > 0 &&
    searchInput && (
      <div className="sm:fixed sm:top-15 p-1 flex flex-col bg-white mt-5  [&>button]:active:scale-95 [&>button]:hover:outline-1 gap-2 border divide-y-1">
        {searchedBooks.map((book, i) => {
          return (
            <Link
              key={i}
              to={`/books/${book._id || book.item._id}`}
              className="truncate overflow-ellipsis sm:min-w-80"
            >
              <span title={book.title || book.item.title}>
                {book.title || book.item.title}
              </span>{" "}
              <span className="px-1">-</span>
              <span title={book.author || book.item.author}>
                {book.author || book.item.author}
              </span>
            </Link>
          );
        })}
      </div>
    )
  );
};

export default BookSearchResult;
