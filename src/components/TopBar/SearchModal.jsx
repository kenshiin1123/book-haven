import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../store/bookReducer";

import BookSearchResult from "./SearchBookResult";

const SearchModal = ({ ref, handleSearchClose }) => {
  const searchedBooks = useSelector((state) => state.book.searchedBooks);
  const searchInputRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    searchInputRef.current.focus();
  });

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchInput(newValue);
    dispatch(bookActions.filterBookBySearch(newValue));
  };
  return (
    <dialog ref={ref} className="mx-auto mt-30 bg-transparent">
      <div className="flex gap-5 justify-center">
        <input
          type="text"
          className="border py-1 px-2 bg-white focus:outline-none"
          ref={searchInputRef}
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearchClose}
          className="fit flex justify-center items-center aspect-square size-7 my-auto bg-white border active:scale-95"
        >
          X
        </button>
      </div>
      <BookSearchResult
        searchedBooks={searchedBooks}
        searchInput={searchInput}
      />
    </dialog>
  );
};

export default SearchModal;
