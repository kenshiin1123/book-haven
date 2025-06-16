import { Link, useLocation } from "react-router";
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";
import { useEffect, useRef } from "react";

export default function TopBar() {
  const searchRef = useRef();
  const location = useLocation().pathname;

  const handleSearchButtonClick = () => {
    searchRef.current.showModal();
  };

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
        <ul className="flex ml-auto gap-4">
          <li>
            <button
              onClick={handleSearchButtonClick}
              className="text-4xl focus:outline-none focus:scale-105 active:scale-95"
            >
              <IoSearchOutline />
            </button>
          </li>
          <IconLink icon={<HiOutlineShoppingCart />} to={"cart"} />
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

const SearchModal = ({ ref, handleSearchClose }) => {
  const searchInput = useRef();
  useEffect(() => {
    searchInput.current.focus();
  });
  return (
    <dialog ref={ref} className="mx-auto mt-30 bg-transparent">
      <div className="flex gap-5">
        <input
          type="text"
          className="border py-1 px-2 bg-white focus:outline-none"
          ref={searchInput}
        />
        <button
          onClick={handleSearchClose}
          className="fit flex justify-center items-center aspect-square size-7 my-auto bg-white border active:scale-95"
        >
          X
        </button>
      </div>

      <div className="p-1 flex flex-col bg-white mt-5  [&>button]:active:scale-95 [&>button]:hover:outline-1 gap-1">
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
      </div>
    </dialog>
  );
};

const IconLink = ({ icon, to }) => {
  return (
    <li>
      <Link
        className={`text-4xl focus:outline-none focus:scale-105 active:scale-95`}
        to={to}
      >
        {icon}
      </Link>
    </li>
  );
};
