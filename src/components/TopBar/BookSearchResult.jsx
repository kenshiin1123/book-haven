import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { bookActions } from "../../store/bookReducer";
const BookSearchResult = ({ searchedBooks, searchInput, clearSearchInput }) => {
  const dispatch = useDispatch();
  const clearBookResult = (event) => {
    event.preventDefault;
    dispatch(bookActions.filterBookBySearch(""));
    if (clearSearchInput) {
      clearSearchInput();
    }
  };

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
              <button onClick={clearBookResult}>
                <span title={book.title || book.item.title}>
                  {book.title || book.item.title}
                </span>
                <span className="px-1">-</span>
                <span title={book.author || book.item.author}>
                  {book.author || book.item.author}
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    )
  );
};

export default BookSearchResult;
