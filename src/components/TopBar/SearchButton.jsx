import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../store/bookReducer";
import BookSearchResult from "./BookSearchResult";

const SearchButton = ({ searchRef }) => {
  const searchedBooks = useSelector((state) => state.book.searchedBooks);
  const dispatch = useDispatch();
  const [largeSearch, setLargeSearch] = useState("");
  const input = useRef();

  const handleSearchButtonClick = () => {
    if (window.innerWidth < 640) {
      searchRef.current.showModal();
    } else {
      setLargeSearch("");
      dispatch(bookActions.filterBookBySearch(""));
    }
  };

  const handleInputchange = (event) => {
    const inputVal = event.target.value;
    setLargeSearch(inputVal);
    dispatch(bookActions.filterBookBySearch(inputVal));
  };

  const handleFocus = () => {
    input.current.select();
  };

  return (
    <li className="ml-auto sm:grow sm:justify-center sm:items-center flex flex-col">
      <div className="flex items-center gap-2 sm:outline-1 sm:color-3 rounded-md">
        <input
          ref={input}
          onFocus={handleFocus}
          type="text"
          className="hidden sm:inline focus:outline-0 indent-3 py-1"
          placeholder="Book Search"
          value={largeSearch}
          onChange={handleInputchange}
        />
        <button
          onClick={handleSearchButtonClick}
          className="text-4xl focus:outline-none focus:scale-105 active:scale-95 sm:text-3xl sm:p-1"
        >
          {largeSearch.length > 0 ? (
            <MdClear className="hidden sm:block" />
          ) : (
            <IoSearchOutline />
          )}
        </button>
      </div>

      <BookSearchResult
        searchInput={largeSearch}
        searchedBooks={searchedBooks}
      />
    </li>
  );
};

export default SearchButton;
