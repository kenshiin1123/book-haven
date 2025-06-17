import { Link, useLocation } from "react-router";
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../store/bookReducer";
import { MdClear } from "react-icons/md";
export default function TopBar() {
  const searchRef = useRef();
  const location = useLocation().pathname;

  const handleSearchClose = () => {
    searchRef.current.close();
  };

  return (
    <header
      className={`z-30 sticky top-0 bg-white flex flex-col w-full pt-5 px-5 pb-2 ${
        location !== "/cart" && "border-b border-b-gray-500"
      }`}
    >
      <section className="flex">
        <h1 className="font-semibold text-xl">Book Haven</h1>
        <ul className="flex ml-auto gap-4 grow">
          <SearchButton searchRef={searchRef} />
          <IconLink
            icon={<HiOutlineShoppingCart />}
            to={"cart"}
            marginLeftAuto={location !== "/books"}
          />
          <IconLink icon={<FaRegUserCircle />} to={"account"} />
        </ul>
      </section>
      <section className="mt-4">
        <ul className="flex gap-4 [&>li>a]:font-semibold [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:hover:underline [&>li>a>svg]:text-xl">
          <li>
            <Link to={"/"}>
              <TiHome /> Home
            </Link>
          </li>
          <li>
            <Link to={"/books"}>
              <RiBookShelfLine /> Books
            </Link>
          </li>
          <li className="ml-auto">
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </section>
      <SearchModal ref={searchRef} handleSearchClose={handleSearchClose} />
    </header>
  );
}

const SearchButton = ({ searchRef }) => {
  const dispatch = useDispatch();
  const [largeSearch, setLargeSearch] = useState("");

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

  return (
    location.pathname == "/books" && (
      <li className="ml-auto sm:mx-auto flex sm:border">
        <input
          type="text"
          className="hidden sm:inline outline-1 indent-3"
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
      </li>
    )
  );
};

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
      {searchedBooks.length > 0 && searchInput && (
        <div className="p-1 flex flex-col bg-white mt-5  [&>button]:active:scale-95 [&>button]:hover:outline-1 gap-2 border divide-y-1">
          {searchedBooks.map((book, i) => {
            return (
              <Link
                key={i}
                to={`/books/${book._id || book.item._id}`}
                className="truncate overflow-ellipsis"
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
      )}
    </dialog>
  );
};

const IconLink = ({ icon, to, marginLeftAuto }) => {
  return (
    <li className={`${marginLeftAuto && "ml-auto"}`}>
      <Link
        className={`text-4xl focus:outline-none focus:scale-105 active:scale-95`}
        to={to}
      >
        {icon}
      </Link>
    </li>
  );
};
